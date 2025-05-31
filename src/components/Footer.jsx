import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-8 px-6 mt-0.25">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
                <div className="mb-4 md:mb-0 text-center md:text-left">
                    <h2 className="text-xl font-semibold text-white">Aman Kumar</h2>
                    <p className="text-sm text-gray-400 mt-1">
                        &copy; 2025 Aman Kumar. All rights reserved.
                    </p>
                </div>

                <div className="flex space-x-6 text-2xl">
                    <a
                        href="mailto:amanyara21@gmail.com"
                        className="hover:text-blue-400 transition-colors"
                        aria-label="Email"
                    >
                        <FaEnvelope />
                    </a>
                    <a
                        href="https://github.com/amanyara21"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-100 transition-colors"
                        aria-label="GitHub"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://linkedin.com/in/amanyara21"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-500 transition-colors"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://twitter.com/amanyara21"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-sky-400 transition-colors"
                        aria-label="Twitter"
                    >
                        <FaTwitter />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
