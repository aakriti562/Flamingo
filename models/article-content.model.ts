import { ArticleContentModel } from "@/types/models";
import { Model, Schema, model, models } from "mongoose";

const articleContentSchema = new Schema<ArticleContentModel>(
	{
		content: {
			type: String,
			minlength: 50,
			maxlength: 5000,
			trim: true,
			required: true,
		},
		heading: {
			type: String,
			minlength: 10,
			maxlength: 100,
			trim: true,
			required: true,
		},
		language: {
			type: Schema.Types.ObjectId,
			ref: "language",
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

export const ArticleContent: Model<ArticleContentModel> =
	models["article_content"] || model("article_content", articleContentSchema);
