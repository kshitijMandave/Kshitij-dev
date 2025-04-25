import { PROJECTS } from "../../constants";
import React from 'react';

function Projects() {
  return (
    <div className="pb-4 px-4">
      <h2 className="my-20 text-center text-4xl">Projects</h2>
      <div className="flex justify-center">
        {PROJECTS.map((project, index) => (
          <div key={index} className="w-full max-w-4xl text-center">
            <img
              src={project.image}
              alt={project.title}
              className="mb-6 w-full h-auto max-h-[500px] rounded object-cover"
            />
            <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline text-lg"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
