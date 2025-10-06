import React from "react";
import TechBadge from "./TechBadge";

const ProjectCard = ({
  image,
  title,
  techs = [],
  previewUrl = "#",
  githubUrl = "#",
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm dark:bg-gray-800 backdrop-blur-xl ring-1 ring-white/20 transition-all duration-300 hover:backdrop-blur-2xl hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] hover:scale-105 hover:border-white/50">
      <a href={previewUrl} target="_blank" rel="noopener noreferrer">
        <div className="h-48 overflow-hidden rounded-t-lg">
          <img className="w-full h-full object-cover" src={image} alt={title} />
        </div>
      </a>
      <div className="flex flex-col p-5 gap-5">
        <a href={previewUrl} target="_blank" rel="noopener noreferrer">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        </a>
        <div className="flex flex-wrap gap-2 mb-5">
          {techs.map((tech, idx) => (
            <TechBadge key={idx} name={tech.name} />
          ))}
        </div>
        <div className="flex justify-evenly gap-3">
          <a href={previewUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-10 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Preview
          </a>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-10 py-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
