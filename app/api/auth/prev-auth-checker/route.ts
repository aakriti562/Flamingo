import { auth } from "@/auth";
import { APIHandler } from "@/utils";
import { NextResponse } from "next/server";

interface ResponseBody {
	isAuthenticated: boolean;
}

export const GET = APIHandler<ResponseBody>(async (request) => {
	const token = await auth();

	return NextResponse.json(
		{
			success: true,
			code: 200,
			data: {
				isAuthenticated: token !== null,
			},
		},
		{
			status: 200,
		}
	);
});

export const revalidate = 0;
