import { PROJECTS } from "../../constants";
import React from 'react';
import { motion } from 'framer-motion';

function Projects() {
  return (
    <div className="pb-24 px-4">
      {/* Section Heading */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>

      {/* Project Cards Container */}
      <div className="flex flex-col items-center gap-20">
        {PROJECTS.map((project, index) => (
          <div key={index} className="w-full max-w-4xl text-center">
            
            {/* Image Animation */}
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -100 }}
              transition={{ duration: 1 }}
              className="mb-6 rounded"
            >
              <img
                src={project.image}
                alt={project.title}
                className="mb-6 w-full h-auto max-h-[500px] rounded object-cover"
              />
            </motion.div>

            {/* Text & Tech Animation */}
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4 mx-auto"
            >
              <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              {/* <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline text-lg"
              >
                View Project
              </a> */}

              {/* Tech Stack */}
              <div className="mt-5 flex flex-wrap justify-center gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="rounded bg-stone-900 hover:bg-sky-700 cursor-pointer px-3 py-1 text-sm font-medium text-stone-300 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
