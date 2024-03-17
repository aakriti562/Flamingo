import { auth } from "@/auth";
import { connectToDB } from "@/db";
import { getUser, upsertUser } from "@/services/database/user";
import { APIError } from "@/types/error";
import { LanguageModel, ProfileModel, UserModel } from "@/types/models";
import { APIHandler } from "@/utils";
import { NextResponse } from "next/server";

type GETResponseBody = {
	user: UserModel & {
		profile: ProfileModel & {
			language: LanguageModel;
		};
	};
};

export const GET = APIHandler<GETResponseBody>(async (request) => {
	const session = await auth();

	if (!session || !session.user || !session.user.email)
		throw new APIError("Access denied!!", 401);

	const user = await getUser(session.user.email);

	if (!user) throw new APIError("No user found!!", 404);

	return NextResponse.json(
		{
			success: true,
			code: 200,
			data: {
				user,
			},
		},
		{
			status: 200,
		}
	);
});

interface ResponseBody {
	user: UserModel;
}

export const POST = APIHandler<ResponseBody>(async (request) => {
	const { name, email, provider_id, image } = await request.json();

	await connectToDB();

	const user = await upsertUser({
		name,
		email,
		provider_id,
		image,
	});

	if (!user) throw new APIError("No user found!!", 400);

	return NextResponse.json(
		{
			success: true,
			code: 200,
			data: {
				user,
			},
		},
		{
			status: 200,
		}
	);
});
