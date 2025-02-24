import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // Import the correct loader
import Type from "./Type";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import PujaProfile from '../assests/puja.jpg';

export default function HomeDemo() {
    const particlesInit = useCallback(async (engine) => {
        console.log("Initializing particles...");
        await loadSlim(engine); // Properly load tsparticles-slim
    }, []);

    return (
        <div className="relative h-[100vh] p-5">
            {/* Particles Background */}
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={{
                    background: { color: "#1a1a1a" },
                    particles: {
                        number: { value: 50 },
                        shape: { type: "circle" },
                        opacity: { value: 0.5 },
                        size: { value: 3 },
                        move: { enable: true, speed: 2 },
                        links: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4 },
                    },
                    interactivity: {
                        events: { onHover: { enable: true, mode: "repulse" } },
                    },
                }}
                className="absolute top-0 left-0 w-full h-full z-0"
            />

            {/* Content Section */}
            <div className="relative z-10">
                {/* Header Section */}
                <header className="flex justify-between mx-20 text-white mb-20">
                    <div>
                        <a href="#">
                            <h2 className="font-bold text-[22px]">
                                Puja Rokade | <span className="text-orange-400"><Type /></span>
                            </h2>
                        </a>
                    </div>
                    <div className="flex gap-6 font-normal text-[16px]">
                        <a href="#">About Me</a>
                        <a href="#">Projects</a>
                        <a href="#">Contact Me</a>
                    </div>
                </header>

                {/* Main Section */}
                <div className="flex items-center justify-center flex-col">
                    <main className="flex h-[400px] w-[700px] bg-white p-5 rounded-lg shadow-lg shadow-black">
                        <div className="flex gap-2 flex-col bg-pink-300 px-20 py-5 rounded-lg">
                            <img 
                                src={PujaProfile}
                                alt="home pic"
                                className="h-24 w-24 rounded-full shadow-lg shadow-orange-400"
                            />
                            <h1 className="font-bold text-[24px] text-purple-900">Puja Rokade</h1>
                            <h3 className="font-semibold text-[16px] text-white ">Frontend Developer</h3>
                            <div className="flex gap-4 text-white text-2xl">
                                <a href="www.linkedin.com/in/pujaghodke" target="_blank" rel="noopener noreferrer">
                                    <FaLinkedin className="hover:text-blue-500 transition duration-300" />
                                </a>
                                <a href="https://github.com/puja-1998" target="_blank" rel="noopener noreferrer">
                                    <FaGithub className="hover:text-black transition duration-300" />
                                </a>
                            </div>
                        </div>

                        <div className="bg-gray-500 px-5 rounded-lg flex flex-col gap-3">
                            <h1 className="text-orange-500 text-[36px] font-semibold">Hello,</h1>
                            <p className="text-white">
                            I'm Puja, a passionate and creative frontend developer with a love for crafting beautiful and user-friendly digital experiences. My journey in the world of web development began with a curiosity that turned into a genuine fascination for transforming ideas into interactive, visually appealing websites. I'm well-versed in the latest frontend technologies, including HTML5, CSS3, and JavaScript. I have experience working with popular frameworks like React.
                            </p>
                            <p className="h-10 w-96 border rounded-full flex justify-center items-center text-white hover:text-black hover:bg-white">
                                Contact Me
                            </p>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}
