import React from "react";
import aman from '../assets/aman.png'
import resume from '../assets/Aman_Resume.pdf'
import RadialBackground from "./RadialBackground";
import { Typewriter } from 'react-simple-typewriter';

const Intro = () => {
  return (
    <section className="min-h-screen flex items-end justify-center bg-gray-900 pt-32 px-12 text-white relative pb-0">
      <div className="max-w-7xl w-full grid md:grid-cols-2 items-center gap-8">
        <div>
          <h2 className="w-[100%] text-3xl text-gray-50 uppercase tracking-widest">
            <Typewriter
              words={['Mobile App Developer', 'Full Stack Web Developer']}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={60}
              delaySpeed={1500}
            />
          </h2>

          <h1 className="text-4xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 uppercase">
            Aman Kumar
          </h1>
          <p className="text-lg mt-6 text-gray-300">
            I am a
            <span className="text-blue-400">Mobile App Developer</span> with a
            passion for creating Native Android and Cross Platform Apps.
          </p>

          <div className="mt-8">
            <div className="inline-block p-[1.5px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl">
              <a href={resume} target="_blank" rel="noopener noreferrer">
                <button className="bg-[#0d1117] text-white px-10 py-2 rounded-2xl w-full hover:opacity-90 transition uppercase">
                  RESUME
                </button>
              </a>
            </div>
          </div>


        </div>

        <div className="relative flex justify-center items-end">
          <img
            src={aman}
            alt="Aman"
            className="max-h-[500px] object-cover z-10"
          />
          <RadialBackground colorFrom="rgba(6, 52, 150, 1)" colorTo="rgba(14, 61, 143, 1)" top="50%" left="50%" width="50%" height="50%" opacity={0.8} zIndex={0} />
          <RadialBackground colorFrom="rgba(255, 0, 150, 0.4)" colorTo="transparent" top="5%" left="5%" width="50%" height="50%" opacity={0.8} zIndex={0} />
          <div className="absolute inset-0 z-1 text-white text-sm font-mono opacity-20 pointer-events-none">
            <p className="absolute top-10 left-1/4 sm:left-10 md:left-35">&lt;html&gt;</p>
            <p className="absolute top-1/4 left-0 sm:left-6 md:left-10">Android App Development</p>
            <p className="absolute top-20 right-0 sm:right-2 md:right-4">console.log("Hello Developer");</p>
            <p className="absolute top-4/5 right-0 sm:right-10 md:right-20">npm run dev</p>
            <p className="absolute bottom-18 left-0 sm:left-8 md:left-14">$ npm install</p>
            <p className="absolute top-3/5 right-0 sm:right-6 md:right-10">$ gradle init</p>
            <p className="absolute top-45 right-0 sm:right-4 md:right-0">Mobile App Development</p>
            <p className="absolute top-80 left-0 sm:left-2 md:left-0">Backend Development</p>
            <p className="absolute top-55 left-0 sm:left-4 md:left-0">Frontend Development</p>
            <p className="absolute bottom-4 left-1/2 sm:left-1/4 md:left-1/2">npm start</p>
          </div>

        </div>
      </div>
    </section>
  );
};


export default Intro;
