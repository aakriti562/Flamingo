import { ProfileModel } from "@/types/models";
import { Model, Schema, model, models } from "mongoose";

const profileSchema = new Schema<ProfileModel>(
	{
		user: {
			type: Schema.Types.ObjectId,
			ref: "user",
			required: true,
			trim: true,
		},
		language: {
			type: Schema.Types.ObjectId,
			ref: "language",
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

export const Profile: Model<ProfileModel> =
	models["profile"] || model("profile", profileSchema);
