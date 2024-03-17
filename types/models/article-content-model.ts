import { Document, PopulatedDoc } from "mongoose";
import { ArticleModel, LanguageModel } from ".";

export type ArticleContentModel = Document & {
	language: PopulatedDoc<LanguageModel>;
	article: PopulatedDoc<ArticleModel>;
	content: string;
	heading: string;
	original: boolean;
};
