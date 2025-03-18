import React from "react";
import profilepic from "../assets/profpic.png";
import { TypeAnimation } from "react-type-animation";
import ShinyEffect from "./ShinyEffect";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLink,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaServer } from "react-icons/fa";

import {
  DiCss3,
  DiHtml5,
  DiJavascript1,
  DiNodejsSmall,
  DiReact,
  DiMongodb,
} from "react-icons/di";
import { motion } from "framer-motion";

const Hero = () => {
  const handleDownload = () => {
    const cvUrl =
      "https://drive.google.com/uc?export=download&id=1gWfeyDqChLEGF18fzvooPyT81BtnodhK"; // Change this to your actual resume link
    const link = document.createElement("a");
    link.href = cvUrl;
    link.setAttribute("download", "Bijoy_Prasad_Modi_CV.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="mt-24 max-w-[1200px] pl-9 mx-auto relative" id="hero">
      <div className="mt-24 max-w-[1200px] mx-auto relative flex flex-col md:flex-row items-center md:items-center gap-9">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className=" flex flex-col items-start justify-center w-full md:w-3/5 "
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-gray-200 md:text-7xl text-5xl tracking-tight mb-4"
          >
            Hello, I AM <br />
            {/* <span className="text-purple-500 text-6xl">BIJOY PRASAD MODI</span> */}
          </motion.p>
          <TypeAnimation
            sequence={[
              "Bijoy Prasad Modi",
              1000,
              "A Frontend Developer",
              1000,
              "A Fullstack Web Developer",
              1000,
            ]}
            speed={50}
            repeat={Infinity}
            className="font-bold text-purple-500 text-xl md:text-5xl italic- mb-4"
          />

          {/* <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            className="text-gray-300 max-w-[300px] md:max-w-[500px] md:text-2xl text-lg mb-6"
          >
            I am a passionate fullstack web developer
          </motion.p> */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex flex-row items-center gap-6 my-4 md:mb-0"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)",
              }}
              onClick={handleDownload}
              className="z-10 cursor-pointer font-bold text-gray-200 md:w-auto p-4 border border-purple-400 rounded-xl"
            >
              Download CV
            </motion.button>
            <div className="flex gap-6 flex-row text-4xl md:text-6xl text-purple-400 z-20">
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://github.com/Bijoy-Prasad-Modi"
              >
                <AiOutlineGithub />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://www.linkedin.com/in/bijoy-prasad-modi"
              >
                <AiOutlineLinkedin />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://x.com/BijoyPrasa50837"
                className="text-4xl sm:text-5xl md:text-6xl"
              >
                <FontAwesomeIcon icon={faXTwitter} />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        <div className="animate-bounceCustom">
          <motion.img
            src={profilepic}
            className="w-full h-full rounded-full border-transparent p-1"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          />
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 2 }}
        className="flex flex-row text-7xl px-12 md:px-0 w-full justify-center items-center py-24"
      >
        <p className="text-gray-200 mr-6">My Tech Stack</p>
        <DiHtml5 className="text-orange-600 mx-2" />
        <DiCss3 className="text-blue-600 mx-2" />
        <DiJavascript1 className="text-yellow-400 mx-2" />
        <DiReact className="text-blue-500 mx-2" />
        <DiNodejsSmall className="text-green-600 mx-2" />
        <DiMongodb className="text-green-800 mx-2" />
        {/* <ExpressIcon className="text-green-800 mx-2" /> */}
        {/* <img src={ExpressIcon} alt="" className="w-4 sm:w-20 md:w-24 lg:w-32 xl:w-40 h-6" /> */}
      </motion.div>
      <div className="absolute inset-0 hidden md:block">
        <ShinyEffect left={0} top={0} size={1400} />
      </div>
    </div>
  );
};

export default Hero;
