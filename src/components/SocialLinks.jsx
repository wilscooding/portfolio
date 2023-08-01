import React from "react";
import { FaGitlab, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import resume from "../assets/wilkin-resume1.pdf"

const SocialLinks = () => {
	const links = [
		{
			id: 1,
			child: (
				<>
					LinkedIn <FaLinkedin size={30} />
				</>
			),
			href: "https://www.linkedin.com/in/wilkin-ruiz/",
			style: "rounded-tr-md",
		},
		{
			id: 2,
			child: (
				<>
					Gitlab <FaGitlab size={30} />
				</>
			),
			href: "https://gitlab.com/wilcoding",
		},
		{
			id: 3,
			child: (
				<>
					Email <HiOutlineMail size={30} />
				</>
			),
			href: "mailto:wilkin.ruizvalerio@gmail.com",
		},

		{
			id: 4,
			child: (
				<>
					Resume <BsFillPersonLinesFill size={30} />
				</>
			),
			href: resume,
			target: "_blank",
			rel: "noreferrer",
			style: "rounded-br-md",
		},
	];
	return (
		<div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
			<ul>
				{links.map(({ id, child, href, onClick, style }) => (
					<li
						key={id}
						className={
							"flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" +
							" " +
							style
						}
					>
						{href ? (
							<a
								href={href}
								className="flex justify-between items-center w-full text-white"
								target="_blank"
								rel="noreferrer"
							>
								{child}
							</a>
						) : (
							<button
								className="flex justify-between items-center w-full text-white"
								onClick={onClick}
							>
								{child}
							</button>
						)}
					</li>
				))}
			</ul>
		</div>
	);
};

export default SocialLinks;
