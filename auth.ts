import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

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
		signIn: async ({ profile }) => {
			try {
				if (!profile) throw new Error("No profile received!!");

				const res = await fetch("http://localhost:3000/api/user", {
					method: "POST",
					headers: {
						"content-type": "application/json",
					},
					body: JSON.stringify({
						name: profile.name,
						email: profile.email,
						provider_id: profile.sub,
						image: profile.picture,
					}),
				});

				await res.json();

				return true;
			} catch (error) {
				if (error instanceof Error) console.log(error.message);

				console.log(error);
				return false;
			}
		},
	},
	secret: process.env["AUTH_JWT_SECRET"],
});
