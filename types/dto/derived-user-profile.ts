import { LanguageModel, ProfileModel, UserModel } from "@/types/models";

export type DerivedUserProfile =
	| (UserModel & {
			profile: ProfileModel & {
				language: LanguageModel;
			};
	  })
	| null;
