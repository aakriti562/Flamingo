import { signIn } from "next-auth/react";

export const useLoginSection = () => {
	const onSignInClick = async () => {
		try {
			await signIn("google");
		} catch (error) {}
	};

	return {
		onSignInClick,
	};
};
