import { LanguageModel } from "@/types/models";
import { Model, Schema, model, models } from "mongoose";

const languageSchema = new Schema<LanguageModel>(
	{
		name: {
			type: String,
			trim: true,
			required: true,
			minlength: 2,
			maxlength: 25,
		},
		code: {
			type: String,
			trim: true,
			required: true,
			minlength: 2,
			maxlength: 6,
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

export const Language: Model<LanguageModel> =
	models["language"] || model("language", languageSchema);
