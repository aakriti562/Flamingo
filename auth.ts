import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { getUserByEmail, upsertUser } from "@/services/database/user";
import { connectToDB } from "@/db";

export const {
	auth,
	handlers: { GET, POST },
} = NextAuth({
	providers: [
		Google({
			clientId: process.env["AUTH_GOOGLE_CLIENT_ID"],
			clientSecret: process.env["AUTH_GOOGLE_CLIENT_SECRET"],
		}),
	],
	callbacks: {
		signIn: async ({ user, account, profile }) => {
			try {
				if (!profile) throw new Error("No profile received!!");

				await connectToDB();

				await upsertUser({
					name: profile.name ?? "",
					email: profile.email ?? "",
					provider_id: profile.sub ?? "",
					image: profile.picture ?? "",
				});

				return true;
			} catch (error) {
				if (error instanceof Error) console.log(error.message);

				console.log(error);
				return false;
			}
		},
		session: async ({ session, token, user }) => {
			try {
				await connectToDB();

				const user = await getUserByEmail(session.user.email);

				if (!user) throw new Error("No such user found!!");

				session.user.id = user._id.toString();

				return session;
			} catch (error) {
				if (error instanceof Error) console.log(error.message);
				else console.log(error);

				return session;
			}
		},
	},
	secret: process.env["AUTH_JWT_SECRET"],
});
