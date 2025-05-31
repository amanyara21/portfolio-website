import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="w-full lg:w-[45%] xl:w-[30%] mx-auto bg-gray-800 rounded-2xl shadow-2xl pt-20 relative my-10">
      <div className="absolute -top-30 left-1/2 transform -translate-x-1/2 z-10">
        <img
          src={project.image}
          alt={project.title}
          className="w-96 h-auto object-cover rounded-xl shadow-xl border-4 border-gray-800"
        />
      </div>

      <div className="text-center text-white px-6 pb-8 mt-4">
        <h3 className="text-2xl font-bold text-blue-400 mb-2">{project.title}</h3>
        <p className="text-gray-300">{project.description}</p>

        <div className="flex flex-wrap justify-center gap-2 my-4">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex justify-center gap-4 mt-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 hover:bg-gray-600 text-sm px-4 py-2 rounded-lg"
            >
              GitHub
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-700 hover:bg-blue-600 text-sm px-4 py-2 rounded-lg"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
