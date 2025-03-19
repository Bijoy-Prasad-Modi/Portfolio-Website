import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiMongodb,
  DiGithubBadge,
} from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import Reveal from "./Reveal";

const skills = {
  Frontend: [
    { name: "HTML", icon: <DiHtml5 className="text-orange-600" /> },
    { name: "CSS", icon: <DiCss3 className="text-blue-600" /> },
    { name: "JavaScript", icon: <DiJavascript1 className="text-yellow-500" /> },
    { name: "React", icon: <DiReact className="text-blue-600" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-blue-400" /> },
  ],
  Fullstack: [
    { name: "Node Js", icon: <DiNodejsSmall className="text-green-500" /> },
    { name: "MongoDB", icon: <DiMongodb className="text-green-600" /> },
    { name: "React", icon: <DiReact className="text-blue-500" /> },
    { name: "GitHub", icon: <DiGithubBadge className="text-gray-600" /> },
  ],
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState("Frontend");
  const sectionRef = useRef(null);

  useEffect(() => {
    let timeout;

    const handleScroll = () => {
      clearTimeout(timeout);

      timeout = setTimeout(() => {
        if (sectionRef.current) {
          const section = sectionRef.current.getBoundingClientRect();
          const scrollPercentage = (window.innerHeight - section.top) / section.height;

          if (scrollPercentage >= 0.96) {
            setActiveTab("Fullstack");
          } else {
            setActiveTab("Frontend");
          }
        }
      }, 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="max-w-[650px] h-[700px] mx-auto flex flex-col justify-center px-4 text-gray-200 pb-8 -mb-44 md:py-12"
      id="skills"
    >
      <Reveal>
        <h2 className="text-3xl font-bold -mt-36 mb-10 text-center">Skills</h2>
        <p className="text-center mb-10">
          I worked on various fullstack and frontend projects. Check them{" "}
          <a href="#portfolio" className="underline">
            Here
          </a>
          .
        </p>

        {/* Tab Buttons */}
        <div className="flex justify-center space-x-10 md:space-x-52 mb-8">
          {Object.keys(skills).map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={` px-6 py-2 rounded-lg text-lg font-semibold transition duration-300 ${
                activeTab === category
                  ? "bg-purple-600 text-white"
                  : "bg-gray-800 text-gray-400 hover:bg-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid with Animation */}
        <div className="pl-[40px] md:pl-[60px]">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center"
          >
            {skills[activeTab].map((tech, idx) => (
              <div key={idx} className="flex items-center space-x-2">
                <span className="text-2xl pl-4">{tech.icon}</span>
                <span>{tech.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </Reveal>
    </div>
  );
};

export default Skills;
