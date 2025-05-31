import React from "react";
import projects from "../assets/projects.json";
import ProjectCard from "./ProjectShowcase";
import RadialBackground from "./RadialBackground";

const Projects = () => {
    return (
        <section className="bg-gray-900 py-20 px-4 mt-0.25 relative">
            <h2 className="text-4xl font-bold text-blue-400 mb-8 text-center">Projects</h2>
            <div className="flex justify-center flex-wrap gap-10">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        project={project}
                    />
                ))}
            </div>
            <RadialBackground colorFrom="rgba(255, 0, 150, 0.4)" colorTo="transparent" top="2%" left="2%" width="50%" height="50%" opacity={0.4} zIndex={0} />
            <RadialBackground colorFrom="rgba(255, 0, 150, 0.4)" colorTo="transparent" top="2%" left="50%" width="50%" height="50%" opacity={0.4} zIndex={0} />
            <RadialBackground colorFrom="rgba(255, 0, 150, 0.4)" colorTo="transparent" top="50%" left="2%" width="50%" height="50%" opacity={0.4} zIndex={0} />
            <RadialBackground colorFrom="rgba(255, 0, 150, 0.4)" colorTo="transparent" top="50%" left="50%" width="50%" height="50%" opacity={0.4} zIndex={0} /> 
        </section>
    );
};

export default Projects;
