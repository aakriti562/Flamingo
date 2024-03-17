import { NextRequest, NextResponse } from "next/server";

export const middleware = (request: NextRequest) => {
	const pathname = request.nextUrl.pathname;
	const token = request.cookies.get("authjs.session-token")?.value;

	if (pathname.includes("/api")) {
		return NextResponse.next();
	} else {
		if (pathname === "/" || pathname === "/login") {
			if (token) NextResponse.redirect(`${process.env["NEXT_URL"]}/feed`);
			return NextResponse.next();
		} else {
			if (token) return NextResponse.next();

			NextResponse.redirect(`${process.env["NEXT_URL"]}/login`);
		}
	}
};
