"use client";

import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";

interface CoreProps {
	className?: string;
	onClick?: (e?: React.MouseEvent<HTMLButtonElement> | undefined) => void;
	title: string;
	titleClassName?: string;
	LeftIcon?: LucideIcon | IconType;
	leftIconSize?: number;
	leftIconClassName?: string;
	RightIcon?: LucideIcon | IconType;
	rightIconSize?: number;
	rightIconClassName?: string;
}

const SolidBtnCore = (props: CoreProps) => {
	const {
		className,
		onClick,
		title,
		titleClassName,
		LeftIcon,
		leftIconSize,
		leftIconClassName,
		RightIcon,
		rightIconSize,
		rightIconClassName,
	} = props;

	return (
		<button
			className={twMerge(
				"w-full flex items-center justify-center px-3 py-2 bg-white hover:bg-white/90 rounded-xl font-public-sans",
				className
			)}
			onClick={onClick}
			aria-label={`${title} button`}
		>
			{LeftIcon && (
				<LeftIcon
					size={leftIconSize ?? 22}
					className={twMerge(
						"transition-none mr-1",
						leftIconClassName
					)}
				/>
			)}

			<p className={twMerge("text-pop-dark-400", titleClassName)}>
				{title}
			</p>

			{RightIcon && (
				<RightIcon
					size={rightIconSize ?? 22}
					className={twMerge(
						"transition-none mr-1",
						rightIconClassName
					)}
				/>
			)}
		</button>
	);
};

type Props = CoreProps & {
	link?: string;
	type?: "internal" | "external";
};

const SolidBtn = (props: Props) => {
	const { link, type } = props;

	return (
		<>
			{link ? (
				<>
					{type === "external" ? (
						<a href={link} target="_blank">
							<SolidBtnCore {...props} />
						</a>
					) : (
						<Link href={link}>
							<SolidBtnCore {...props} />
						</Link>
					)}
				</>
			) : (
				<SolidBtnCore {...props} />
			)}
		</>
	);
};

export default SolidBtn;
