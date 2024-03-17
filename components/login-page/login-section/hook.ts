import { isAuthenticatedAtom } from "@/atoms";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useSetRecoilState } from "recoil";

export const useLoginSection = () => {
	const setIsAuthenticated = useSetRecoilState<boolean>(isAuthenticatedAtom);
	const router = useRouter();

	const onSignInClick = async () => {
		try {
			const res = await signIn("google");
			if (res?.ok) {
				setIsAuthenticated(true);
				router.replace("/feed");
			}
		} catch (error) {}
	};

	return {
		onSignInClick,
	};
};
