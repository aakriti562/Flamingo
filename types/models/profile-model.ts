import { Document, PopulatedDoc } from "mongoose";
import { LanguageModel, UserModel } from ".";

export type ProfileModel = Document & {
	user: PopulatedDoc<UserModel>;
	language: PopulatedDoc<LanguageModel>;
};
