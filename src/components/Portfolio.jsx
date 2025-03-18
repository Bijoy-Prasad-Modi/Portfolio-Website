import React from "react";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import { AiFillGithub, AiOutlineGithub } from "react-icons/ai";
import Reveal from "./Reveal";
import {motion, useTime, useTransform } from "framer-motion";

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
    title: "MediCare",
    description:
      "A fullstack Hospital Management System built with MERN stack.",
    links: {
      site: "https://hms-app-client.vercel.app",
      github: "https://github.com/Bijoy-Prasad-Modi/Hospital-Management-App",
    },
  },
  {
    img: project3,
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

  const rotate = useTransform(time, [0,3000], [0,360],{
    clamp: false,
  });
  const rotatingBg = useTransform(rotate, (r) =>{
    return `conic-gradient(from ${r}deg, #9333ea 0%, #f78f20 20%, #1f61f0 40%, #fc14dd 60%, #9333ea 100%)`
  })


  return (
    <div className="max-w-[1000px] mx-auto p-6 md:my-20" id="portfolio">
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
              <div className="relative ">
                <img
                  src={project.img}
                  alt={project.title}
                  className="relative w-full h-full rounded-md z-10 "
                />
                <motion.div
                  className="absolute -inset-[4px] rounded-md "
                  style={{
                    background: rotatingBg
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
                  className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300"
                >
                  View Site
                </a>
                <a
                  href={project.links.github}
                  className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300"
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
