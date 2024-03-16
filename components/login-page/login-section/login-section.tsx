"use client";

import Image from "next/image";
import Logo from "@/assets/images/logo/main-logo.png";

const LoginSection = () => {
	return (
		<div className="flex-1 h-screen flex flex-col items-center justify-center px-5">
			<Image
				src={Logo.src}
				height={Logo.height}
				width={Logo.width}
				alt="logo image"
				className="w-64 h-28 object-contain"
			/>

			<h1 className="w-full max-w-[450px] text-center text-xl text-white mt-10 tracking-wide">
				Get all of the information in your language via automatic
				translation by AI
			</h1>
		</div>
	);
};

export default LoginSection;
