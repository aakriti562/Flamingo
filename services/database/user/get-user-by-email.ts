import { User } from "@/models";

export const getUserByEmail = async (email: string) => {
	const user = await User.findOne({
		email,
	});

	return user;
};
