import { UserModel } from "@/types/models";
import { Model, Schema, model, models } from "mongoose";

const userSchema = new Schema<UserModel>(
	{
		name: {
			type: String,
			minlength: 3,
			maxlength: 40,
			trim: true,
			required: true,
		},
		email: {
			type: String,
			trim: true,
			required: true,
			unique: true,
		},
		provider_id: {
			type: String,
			minlength: 21,
			maxlength: 21,
			trim: true,
			unique: true,
			required: true,
		},
		username: {
			type: String,
			minlength: 3,
			maxlength: 40,
			trim: true,
			required: true,
			unique: true,
		},
		image: {
			type: String,
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

export const User: Model<UserModel> =
	models["user"] || model("user", userSchema);
