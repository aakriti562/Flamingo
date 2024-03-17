import type { Metadata } from "next";
import "./globals.css";
import {
	NextAuthProvider,
	ReactQueryProvider,
	RecoilProvider,
} from "@/components/providers";
import { PrevAuthLoader, UserManager } from "@/components/common";

export const metadata: Metadata = {
	title: "Flamingo",
	description: "An app that caters education in your mother tongue",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<NextAuthProvider>
					<ReactQueryProvider>
						<RecoilProvider>
							<PrevAuthLoader />
							<UserManager />
							{children}
						</RecoilProvider>
					</ReactQueryProvider>
				</NextAuthProvider>
			</body>
		</html>
	);
}
