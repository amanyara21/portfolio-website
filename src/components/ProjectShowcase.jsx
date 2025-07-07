import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaYoutube } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  const { title, techStack, details, githubUrl, liveUrl, video } = project;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="w-full md:w-[500px] h-full bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
    >
      <div className="space-y-4 flex-grow">
        <div>
          <h2 className="text-3xl font-semibold text-white tracking-wide">
            {title}
          </h2>
          <p className="text-sm text-white/60 mt-1">{techStack}</p>
        </div>

        <ul className="list-disc list-inside text-white/90 space-y-2 pl-2">
          {details.map((point, idx) => (
            <li key={idx} className="leading-relaxed">
              {point}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap gap-4 pt-4">
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/80 hover:text-white transition"
          >
            <FaGithub className="text-xl" />
            <span>GitHub</span>
          </a>
        )}
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/80 hover:text-white transition"
          >
            <FaExternalLinkAlt className="text-xl" />
            <span>Live Site</span>
          </a>
        )}
        {video && (
          <a
            href={video}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/80 hover:text-white transition"
          >
            <FaYoutube className="text-xl" />
            <span>YT Video</span>
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
