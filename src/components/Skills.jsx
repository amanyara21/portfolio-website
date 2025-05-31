import React from "react";
import skills from "../assets/skills.json";
import { FaJava, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiJavascript, SiFirebase, SiKotlin, SiSpringboot } from "react-icons/si";
import RadialBackground from "./RadialBackground";

const iconMap = {
  FaJava: <FaJava />,
  SiJavascript: <SiJavascript />,
  FaReact: <FaReact />,
  FaNodeJs: <FaNodeJs />,
  SiMongodb: <SiMongodb />,
  SiFirebase: <SiFirebase />,
  SiTailwindcss: <SiTailwindcss />,
  FaHtml5: <FaHtml5 />,
  FaCss3Alt: <FaCss3Alt />,
  FaGithub: <FaGithub />,
  SiKotlin: <SiKotlin />,
  SiSpringboot: <SiSpringboot />
};

const Skills = () => {
  return (
    <section className="bg-gray-900 text-white py-16 px-4 mt-0.25 relative z-2">
      <RadialBackground colorFrom="rgba(255, 0, 150, 0.4)" colorTo="transparent" top="1%" left="1%" width="50%" height="50%" opacity={0.8} zIndex={0} />
      <RadialBackground colorFrom="rgba(6, 52, 150, 1)" colorTo="rgba(14, 61, 143, 1)" top="60%" left="60%" width="30%" height="30%" opacity={0.8} zIndex={0} />
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-400 mb-8">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-2 p-4 bg-gray-800 rounded-xl hover:bg-gray-700 transition duration-300 shadow-md"
            >
              <div className={`text-4xl ${skill.color}`}>
                {iconMap[skill.icon]}
              </div>
              <p className="text-lg font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
