import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import { AiOutlineGithub } from "react-icons/ai";
import Reveal from "./Reveal";
import { motion, useTime, useTransform } from "framer-motion";

const projects = [
  {
    img: project1,
    title: "X Clone",
    description:
      "Fullstack Twitter clone built with MERN stack & DaisyUI Technology.",
    links: {
      site: "https://twitter-app-client-live.vercel.app",
      github: "https://github.com/Bijoy-Prasad-Modi/Twitter-Clone",
    },
  },
  {
    img: project2,
    title: "WorldPlates",
    description:
      "A fun and easy to use recipe app where you can search and explore delicious dishes from around the world.",
    links: {
      site: "https://world-plates.vercel.app",
      github: "https://github.com/Bijoy-Prasad-Modi/World-Plates",
    },
  },
  {
    img: project3,
    title: "MediCare",
    description:
      "A fullstack Hospital Management System built with MERN stack.",
    links: {
      site: "https://hms-app-client.vercel.app",
      github: "https://github.com/Bijoy-Prasad-Modi/Hospital-Management-App",
    },
  },
  {
    img: project4,
    title: "CryptoTrack",
    description: "A Crypto Tracker app created using React and Material UI.",
    links: {
      site: "https://react-crypto-app-track.vercel.app",
      github: "https://github.com/Bijoy-Prasad-Modi/Crypto-Tracker-App",
    },
  },
];

const Portfolio = () => {
  const time = useTime();

  const rotate = useTransform(time, [0, 3000], [0, 360], {
    clamp: false,
  });
  const rotatingBg = useTransform(rotate, (r) => {
    return `conic-gradient(from ${r}deg, #841be3 ,  #1f61f0 , #e720f5)`;
  });

  return (
    <div className="max-w-[1100px] mx-auto p-6 pt-4 md:my-20" id="portfolio">
      <h2 className="text-3xl font-bold text-gray-200 mb-8">Portfolio</h2>
      {projects.map((project, index) => (
        <Reveal>
          <div
            key={index}
            className={`flex flex-col md:flex-row ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            } mb-12`}
          >
            <div className="w-full md:w-1/2 p-2">
              <div className="relative hover:scale-[1.2] transition duration-300">
                <img
                  src={project.img}
                  alt={project.title}
                  className="relative w-full h-full rounded-md z-10"
                />
                <motion.div
                  className="absolute -inset-[4px] rounded-md "
                  style={{
                    background: rotatingBg,
                  }}
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
              <h3 className="text-2xl font-semibold text-gray-200 mb-4">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex space-x-4">
                <a
                  href={project.links.site}
                  className="px-4 py-2 bg-slate-700  hover:shadow-[0_0_15px_#a855f7] text-gray-200 rounded-lg 
                                        transition duration-300 hover:scale-[1.1]"
                >
                  View Site
                </a>
                <a
                  href={project.links.github}
                  className="px-4 py-2 bg-slate-700 hover:shadow-[0_0_15px_#a855f7] text-gray-200 rounded-lg 
                                        transition duration-300 hover:scale-[1.15]"
                >
                  <AiOutlineGithub />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
};

export default Portfolio;
