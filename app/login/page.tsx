import Image from "next/image";
import LoginHero from "@/assets/images/login/login-hero.png";
import { LoginSection } from "@/components/login-page";

const LoginPage = () => {
	return (
		<main className="w-full min-h-screen flex font-poppins bg-pop-dark-300">
			<LoginSection />
			<div className="w-1/2 lg:flex hidden flex-col h-screen items-center justify-center">
				<Image
					src={LoginHero.src}
					width={LoginHero.width}
					height={LoginHero.height}
					className="w-full h-full object-cover rounded-l-md"
					alt=""
				/>
			</div>
		</main>
	);
};

export default LoginPage;
