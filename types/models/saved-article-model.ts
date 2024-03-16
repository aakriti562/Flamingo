import { Document, PopulatedDoc } from "mongoose";
import { ArticleModel, UserModel } from ".";

export type SavedArticleModel = Document & {
	user: PopulatedDoc<UserModel>;
	article: PopulatedDoc<ArticleModel>;
};
