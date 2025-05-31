import React from "react";
import RadialBackground from "./RadialBackground"; 
import About from "../assets/about.png"; 

const AboutMe = () => {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-center min-h-screen px-6 md:px-16 bg-gray-900 text-white overflow-hidden mt-0.25">
      
      <RadialBackground colorFrom="rgba(6, 52, 150, 1)" colorTo="rgba(14, 61, 143, 1)" top="50%" left="50%" width="50%" height="50%" opacity={0.8} zIndex={0}/>
      <RadialBackground colorFrom="rgba(255, 0, 150, 0.4)" colorTo="transparent" top="5%" left="5%" width="50%" height="50%" opacity={0.8} zIndex={0}/>

      <div className="relative z-10 w-full md:w-1/2 flex justify-center">
        <img 
          src={About}
          alt="Coding Illustration"
          className="w-72 h-72 md:w-[400px] md:h-[400px] border-2 border-white object-cover rounded-full shadow-lg"
        />
      </div>

      <div className="relative z-10 w-full md:w-1/2 text-center md:text-left mt-8 md:mt-0">
        <h2 className="text-4xl font-bold text-blue-400">About Me</h2>
        <p className="mt-4 text-lg leading-relaxed text-gray-300">
          Hi, I'm <span className="text-blue-300 font-semibold">Aman Kumar</span>, a passionate software developer
          with expertise in Kotlin, ReactJs, React Native, and backend technologies like Node.js and SpringBoot. I love solving real-world problems through technology and building efficient, scalable applications. 
        </p>
        <p className="mt-3 text-gray-400">
          Currently, I'm focusing on developing innovative solutions in web & mobile app development, integrating 
          AI & ML into real-world applications.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
