import { ArticleModel } from "@/types/models";
import { Model, Schema, model, models } from "mongoose";

const articleSchema = new Schema<ArticleModel>(
	{
		title: {
			type: String,
			minlength: 3,
			maxlength: 90,
			trim: true,
			required: true,
		},
		user: {
			type: Schema.Types.ObjectId,
			ref: "user",
			required: true,
			trim: true,
		},
		follow_up: {
			type: Schema.Types.ObjectId,
			ref: "article",
			required: false,
			trim: true,
			default: null,
		},
		status: {
			type: String,
			enum: ["processing", "published", "failed"],
			required: false,
			default: "processing",
		},
		type: {
			type: String,
			enum: ["public", "private"],
			required: true,
			default: "public",
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

export const Article: Model<ArticleModel> =
	models["article"] || model("article", articleSchema);
