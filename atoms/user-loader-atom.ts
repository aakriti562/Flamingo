import { atom } from "recoil";

export const userLoaderAtom = atom<boolean>({
	key: "userLoaderAtom",
	default: false,
});
