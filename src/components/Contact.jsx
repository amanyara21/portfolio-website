import React from "react";
import { FaLinkedin, FaInstagram, FaGithub, FaXRay, FaTwitter } from "react-icons/fa";
import RadialBackground from "./RadialBackground";

const Contact = () => {
    return (
        <section className="relative w-full bg-gray-900 text-white px-6 py-12 flex flex-col md:flex-row justify-center pt-24 p-12 mt-0.25 gap-y-20">
            <div className="w-full md:w-2/5 space-y-6">
                <h2 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
                    DO YOU HAVE A PROJECT TO DISCUSS?
                </h2>
                <p className="text-2xl font-medium flex items-center gap-2">
                    GET IN TOUCH
                </p>
                <div>
                    <h4 className="uppercase text-sm text-gray-400">Contact</h4>
                    <p className="text-blue-400">amanyara21@gmail.com</p>
                </div>
                <div>
                    <h4 className="uppercase text-sm text-gray-400">Social Media</h4>
                    <div className="flex gap-4 mt-2 text-xl">
                        <div className="flex items-center space-x-6 text-white text-2xl">
                            <a href="https://www.github.com/amanyara21" target="_blank" rel="noopener noreferrer">
                                <FaGithub className="hover:text-blue-800 transition duration-300" />
                            </a>
                            <a href="https://www.linkedin.com/in/amanyara21" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin className="hover:text-blue-500 transition duration-300" />
                            </a>
                            <a href="https://x.com/amanyara21" target="_blank" rel="noopener noreferrer">
                                <FaTwitter className="hover:text-blue-600 transition duration-300" />
                            </a>
                            <a href="https://www.instagram.com/aman.yara21" target="_blank" rel="noopener noreferrer">
                                <FaInstagram className="hover:text-pink-500 transition duration-300" />
                            </a>

                        </div>

                    </div>
                </div>
            </div>

            <div className="w-full md:w-1/2">
                <h3 className="uppercase text-xl mb-4">Contact Form</h3>
                <form className="space-y-6">
                    <input
                        type="text"
                        placeholder="Name"
                        className="w-full bg-transparent border border-gray-600 px-4 py-3 rounded-lg outline-none focus:border-pink-500"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full bg-transparent border border-gray-600 px-4 py-3 rounded-lg outline-none focus:border-purple-500"
                    />
                    <textarea
                        placeholder="Message"
                        rows="4"
                        className="w-full bg-transparent border border-gray-600 px-4 py-3 rounded-lg outline-none focus:border-purple-500"
                    ></textarea>
                    <div className="inline-block p-[1.5px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl  w-full sm:w-auto">
                        <button className="bg-[#0d1117] text-white px-10 py-2 rounded-2xl w-full hover:opacity-90 transition">
                            SEND MESSAGE
                        </button>
                    </div>

                </form>
            </div>
            <RadialBackground colorFrom="rgba(255, 0, 150, 0.4)" colorTo="transparent" top="5%" left="5%" width="50%" height="50%" opacity={0.8} zIndex={0} />
            <RadialBackground colorFrom="rgba(6, 52, 150, 1)" colorTo="rgba(14, 61, 143, 1)" top="50%" left="5%" width="30%" height="30%" opacity={0.8} zIndex={0} />
        </section>
    );
};

export default Contact;
