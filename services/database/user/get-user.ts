import { User } from "@/models";

export const getUser = async (email: string) => {
	const user = await User.aggregate([
		{
			$match: {
				email,
			},
		},
		{
			$lookup: {
				from: "profiles",
				localField: "_id",
				foreignField: "user",
				as: "user",
				pipeline: [
					{
						$lookup: {
							from: "languages",
							localField: "language",
							foreignField: "_id",
							as: "language",
							pipeline: [
								{
									$project: {
										_id: 1,
										name: 1,
										code: 1,
										createdAt: 1,
										updatedAt: 1,
										__v: 1,
									},
								},
							],
						},
					},
					{
						$addFields: {
							language: {
								$first: "$language",
							},
						},
					},
				],
			},
		},
		{
			$addFields: {
				profile: {
					$first: "$user",
				},
			},
		},
	]);

	return user[0];
};
