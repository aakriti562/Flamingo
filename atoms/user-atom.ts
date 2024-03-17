import { DerivedUserProfile } from "@/types/dto";
import { atom } from "recoil";

export const userAtom = atom<DerivedUserProfile>({
	key: "userAtom",
	default: null,
});
