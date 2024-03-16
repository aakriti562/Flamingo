import { SavedArticleModel } from "@/types/models";
import mongoose, { Model, Schema, model, models } from "mongoose";

const savedArticleSchema = new Schema<SavedArticleModel>(
	{
		user: {
			type: Schema.Types.ObjectId,
			ref: "user",
			required: true,
			trim: true,
		},
		article: {
			type: Schema.Types.ObjectId,
			ref: "article",
			required: true,
			trim: true,
		},
	},
	{
		timestamps: true,
		toJSON: {
			transform: (_, returningDoc) => {
				returningDoc["id"] = returningDoc["_id"];
				delete returningDoc["_id"];
			},
		},
	}
);

export const SavedArticle: Model<SavedArticleModel> =
	models["saved_article"] || model("saved_article", savedArticleSchema);
