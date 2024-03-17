import { isAuthenticatedAtom } from "@/atoms";
import { appLoadAtom } from "@/atoms/app-load-atom";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { useRecoilState } from "recoil";

export const usePrevAuthLoader = () => {
	const [appLoadState, setAppLoadState] =
		useRecoilState<boolean>(appLoadAtom);
	const [isAuthenticated, setIsAuthenticated] =
		useRecoilState<boolean>(isAuthenticatedAtom);
	const pathname = usePathname();
	const router = useRouter();

	const appMounted = useRef<boolean>(false);

	const checkPreviouslyAuthenticated = async () => {
		try {
			const response = await fetch("api/auth/prev-auth-checker", {
				method: "GET",
				headers: {
					"content-type": "application/json",
				},
			});

			const data = await response.json();

			if (!data.success) {
				console.log(data.error);
			}

			console.log(data);

			if (data?.data.isAuthenticated) {
				setIsAuthenticated(true);
			} else {
				setIsAuthenticated(false);
			}
		} catch (error) {
			if (error instanceof Error) {
				console.log(error.message);
				return;
			}

			console.log(error);
		} finally {
			setAppLoadState(true);
		}
	};

	useEffect(() => {
		if (appMounted.current) return;

		appMounted.current = true;
		checkPreviouslyAuthenticated();
	}, []);

	useEffect(() => {
		if (appLoadAtom) {
			if (pathname === "/" || pathname === "/login") {
				if (isAuthenticated) router.replace("/feed");
			} else {
				if (!isAuthenticated) router.replace("/login");
			}
		}
	}, [appLoadState, isAuthenticated]);

	return {};
};
