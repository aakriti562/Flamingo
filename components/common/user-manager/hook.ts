import { isAuthenticatedAtom, userLoaderAtom } from "@/atoms";
import { DerivedUserProfile } from "@/types/dto";
import { useEffect } from "react";
import { useSetRecoilState, useRecoilState, useRecoilValue } from "recoil";

export const useUserManager = () => {
	const [isUserLoading, setIsUserLoading] =
		useRecoilState<boolean>(userLoaderAtom);
	const setUser = useSetRecoilState<DerivedUserProfile>;
	const isAuthenticated = useRecoilValue<boolean>(isAuthenticatedAtom);

	const getUserProfile = async () => {
		if (isUserLoading) return;
		setIsUserLoading(true);

		try {
			const response = await fetch("/api/user", {
				method: "GET",
				headers: {
					"content-type": "application/json",
				},
			});

			const data = await response.json();

			setUser(data.data.user);
		} catch (error) {
			console.log(error);
		} finally {
			setIsUserLoading(false);
		}
	};

	useEffect(() => {
		if (isAuthenticated) {
			getUserProfile();
		}
	}, [isAuthenticated]);

	return {};
};
