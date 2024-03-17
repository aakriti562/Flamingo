"use client";

import Image from "next/image";
import Logo from "@/assets/images/logo/main-logo.png";
import { SolidBtn } from "@/components/elements";
import { FaGoogle } from "react-icons/fa";
import { useLoginSection } from "./hook";

const LoginSection = () => {
	const { onSignInClick } = useLoginSection();

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

			<SolidBtn
				title="Continue with Google"
				className="w-fit px-4 py-1.5 mt-8 rounded-md"
				titleClassName="text-xl"
				LeftIcon={FaGoogle}
				leftIconClassName="mr-3"
				onClick={onSignInClick}
			/>
		</div>
	);
};

export default LoginSection;
