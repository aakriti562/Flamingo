import { User } from "@/models";
import { generateUsername } from "@/utils";

interface Args {
	provider_id: string;
	name: string;
	email: string;
	image: string;
}

export const upsertUser = async (args: Args) => {
	const { provider_id, name, email, image } = args;

	const user = await User.findOneAndUpdate(
		{
			provider_id,
		},
		{
			provider_id,
			name,
			email,
			image,
			username: generateUsername(email),
		},
		{
			upsert: true,
		}
	);

	return user;
};
