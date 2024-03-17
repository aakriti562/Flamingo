import { atom } from "recoil";

export const isAuthenticatedAtom = atom<boolean>({
	key: "isAuthenticatedAtom",
	default: false,
});
