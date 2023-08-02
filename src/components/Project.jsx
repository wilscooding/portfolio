import React from "react";
import autoHubGif from "../assets/AutoHub.gif";
import cookitGif from "../assets/Cookit.gif";

const Projects = () => {
	const projects = [
    {
      id: 1,
      gif: autoHubGif,
      title: "AutoHub",
      description: (
        <div>
          <p>
            AutoHub is a comprehensive application that consists of two
            microservices: Service and Sales. These microservices are designed
            to efficiently handle different aspects of automobile dealership
            management, ensuring a seamless experience for both customers and
            salespersons.
          </p>
          <div className="border-t-2 border-gray-500 mt-4 pt-4">
            <p className="text-lg font-bold">Technologies Used:</p>
            <ul className="list-disc pl-6">
              <li>Backend: Django (Python)</li>
              <li>Frontend: React (JavaScript)</li>
              <li>Database: PostgreSQL</li>
              <li>Containerization: Docker</li>
            </ul>
          </div>
          <div className="mt-4">
            <a
              href="https://gitlab.com/wilcoding/auto-hub"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 font-bold hover:underline"
            >
              Source Code
            </a>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      gif: cookitGif,
      title: "CookIt",
      description: (
        <div>
          <p>
            CookIt is a web application that helps users keep track of their
            recipes, ingredients inventory, and grocery lists, all in one
            place. It allows users to search for recipes, save them to their
            recipe book, and customize them to their tastes. Additionally, users
            can manage their own recipes, add/edit/delete ingredients to their
            inventory, and create/delete items from their grocery list.
          </p>
          <div className="border-t-2 border-gray-500 mt-4 pt-4">
            <p className="text-lg font-bold">Technologies Used:</p>
            <ul className="list-disc pl-6">
              <li>Backend: FastAPI (Python)</li>
              <li>Frontend: React (JavaScript)</li>
              <li>Database: PostgreSQL</li>
              <li>Containerization: Docker</li>
            </ul>
          </div>
          <div className="mt-4">
            <a
              href="https://gitlab.com/wilcoding/Cookit"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 font-bold hover:underline"
            >
              Source Code
            </a>
          </div>
        </div>
      ),
    },
  ];

	return (
		<div
			name="projects"
			className="bg-gradient-to-b from-gray-800 to-black w-full min-h-screen text-white"
		>
			<div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full min-h-screen">
				<div>
					<p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
						Projects
					</p>
					<p className="py-6">These are some of my projects.</p>
				</div>

				<div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-8 text-center py-8 px-12 sm:px-0">
					{projects.map(({ id, gif, title, description }) => (
						<div
							key={id}
							className="shadow-md hover:scale-105 duration-500 rounded-lg"
						>
							<img
								src={gif}
								alt={title}
								className="w-full rounded-t-lg"
							/>
							<div className="bg-gray-900 p-4 rounded-b-lg">
								<p className="text-xl font-bold mb-2">
									{title}
								</p>
								<p className="text-sm md:text-base">{description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Projects;
