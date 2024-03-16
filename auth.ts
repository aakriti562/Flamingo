import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { upsertUser } from "@/services/database/user";

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

				const dbUser = await upsertUser({
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
			// session.userId =

			console.log(token.sub);

			return session;
		},
	},
	secret: process.env["AUTH_JWT_SECRET"],
});
