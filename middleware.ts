import { NextRequest, NextResponse } from "next/server";

export const middleware = (request: NextRequest) => {
	const pathname = request.nextUrl.pathname;
	const token = request.cookies.get("authjs.session-token")?.value;

	console.log(token);

	if (pathname.includes("/api")) {
		return NextResponse.next();
	} else {
		if (pathname === "/" || pathname === "/login") {
			if (token) {
				const res = NextResponse.rewrite(
					`${process.env["NEXT_URL"]}/feed`
				);

				return res;
			}
			return NextResponse.next();
		} else {
			if (token) return NextResponse.next();

			NextResponse.redirect(`${process.env["NEXT_URL"]}/login`);
		}
	}
};
