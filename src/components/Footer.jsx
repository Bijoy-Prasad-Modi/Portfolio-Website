import React from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className="max-w-[1300px] mx-auto flex justify-between p-6 md:p-20 text-sm md:text-lg mt-12">
      <div className="space-y-4">
        <h3 className="text-2xl text-gray-200 font-semibold">B.P.Modi</h3>
        <div className="flex flex-row gap-6 text-gray-400 text-4xl">
          <a href="https://github.com/Bijoy-Prasad-Modi">
            <FaGithubSquare />
          </a>
          <a href="https://www.linkedin.com/in/bijoy-prasad-modi">
            <FaLinkedin />
          </a>
          <a href="https://x.com/BijoyPrasa50837">
            <FontAwesomeIcon icon={faXTwitter} className="text-6xl w-10 h-10" />
          </a>
        </div>
      </div>
      <p className="text-gray-400">@2025 B.P.Modi</p>
    </div>
  );
};

export default Footer;
