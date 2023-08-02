import React from "react";
import css from "../assets/css.png";
import html from "../assets/html.png";
import javascript from "../assets/javascript.png";
import mongodb from "../assets/mongodb.png";
import postgresql from "../assets/postgresql.png";
import python from "../assets/python.png";
import tailwind from "../assets/tailwind.png";
import reactimage from "../assets/reactimage.png";
import django from "../assets/django.png";
import gitlab from "../assets/gitlab.png";

const Skills = () => {
	const techs = [
		{
			id: 1,
			src: html,
			title: "HTML",
			style: "shadow-orange-500",
		},
		{
			id: 2,
			src: css,
			title: "CSS",
			style: "shadow-blue-500",
		},
		{
			id: 3,
			src: javascript,
			title: "JavaScript",
			style: "shadow-yellow-500",
		},
		{
			id: 4,
			src: reactimage,
			title: "React",
			style: "shadow-blue-600",
		},
		{
			id: 5,
			src: tailwind,
			title: "Tailwind",
			style: "shadow-sky-400",
		},
		{
			id: 6,
			src: django,
			title: "Django",
			style: "shadow-green-500",
		},
		{
			id: 7,
			src: python,
			title: "Python",
			style: "shadow-blue-500",
		},
		{
			id: 8,
			src: mongodb,
			title: "MongoDB",
			style: "shadow-green-300",
		},
		{
			id: 9,
			src: gitlab,
			title: "GitLab",
			style: "shadow-orange-500",
		},
		{
			id: 10,
			src: postgresql,
			title: "PostgreSQL",
			style: "shadow-sky-500",
		},
	];

	return (
		<div
			name="skills"
			className="bg-gradient-to-b from-gray-800 to-black w-full min-h-screen text-white"
		>
			<div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center md:w-full">
				<div>
					<p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
						Skills
					</p>
					<p className="py-6">
						These are the technologies I've worked with.
					</p>
				</div>

				<div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
					{techs.map(({ id, src, title, style }) => (
						<div
							key={id}
							className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
						>
							<img src={src} alt="" className="w-20 mx-auto" />
							<p className="mt-4">{title}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Skills;
