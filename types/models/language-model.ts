import { Document } from "mongoose";

export type LanguageModel = Document & {
	name: string;
	code: string;
};
