import { Document } from "mongoose";

export type UserModel = Document & {
	name: string;
	email: string;
	username: string;
	provider_id: string;
	image: string;
};
