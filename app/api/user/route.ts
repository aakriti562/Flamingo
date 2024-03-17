import { connectToDB } from "@/db";
import { upsertUser } from "@/services/database/user";
import { APIError } from "@/types/error";
import { UserModel } from "@/types/models";
import { APIHandler } from "@/utils";
import { NextResponse } from "next/server";

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
