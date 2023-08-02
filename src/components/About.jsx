import React from "react";

const About = () => {
	return (
		<div
			name="about"
			className="w-full bg-gradient-to-b from-gray-800 to-black text-white"
		>
			<div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center md:w-full md:h-screen">
				<div className="pb-8">
					<p className="text-4xl font-bold inline border-b-4 border-gray-500">
						About me
					</p>
				</div>
				<p className="text-lg mt-8">
          I'm a passionate software engineer with a strong drive for continuous learning and growth. I graduated from the prestigious Hack Reactor Bootcamp and I am excited to embark on this new journey as a software engineer.
        </p>
        <p className="text-lg mt-4">
          Prior to my transition into the tech industry, I worked as a correctional officer, where I honed my skills in problem-solving, discipline, and maintaining a calm and composed demeanor in high-pressure situations. This experience taught me the importance of effective communication, adaptability, and the ability to work well within a team. Before that, I spent several years in the restaurant industry, where I gained valuable skills such as customer service, time management, and experience in a fast-paced environment. These experiences have shaped me into a professional who can thrive in dynamic environments.
        </p>
        <p className="text-lg mt-4">
          Now, as I transition into the world of software engineering, I am eager to leverage the skills and lessons acquired from my previous roles. I am excited to contribute to innovative projects, collaborate with talented individuals, and be part of a team that shares my passion for continuous improvement and delivering high-quality software solutions.
        </p>
        <p className="text-lg mt-4">
          Let's connect and embark on this exciting journey together!
        </p>
			</div>
		</div>
	);
};

export default About;
