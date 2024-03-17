import { Document, PopulatedDoc } from "mongoose";
import { UserModel } from ".";

export type ArticleModel = Document & {
	follow_up: PopulatedDoc<ArticleModel> | null;
	user: PopulatedDoc<UserModel>;
	title: string;
	status: "processing" | "published" | "failed";
	type: "private" | "public";
};
