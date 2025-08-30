import { useState } from "react";
import Reveal from "./Reveal";

const Contact = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <div className="px-6 max-w-[1000px] mx-auto md:my-12" id="contact">
      <Reveal>
        <div className="grid md:grid-cols-2 place-items-center">
          <div>
            <div className="text-gray-300 my-3">
              <h3 className="text-4xl font-semibold mb-5">
                About <span>Me</span>
              </h3>
              <p className="text-justify leading-7 w-full mx-auto">
                I am a passionate Frontend and Full-Stack Web Developer,
                dedicated to crafting seamless, user-friendly digital
                experiences. With expertise in modern web technologies like
                React, Redux, Node.js, and Tailwind CSS. I am eager to
                collaborate on innovative projects and bring creative ideas to
                life.
              </p>
            </div>
            {/* <div className="flex mt-6 items-center gap-7">
              <div className="bg-gray-800/40 p-4 py-5 rounded-lg w-1/4 ml-2">
                <h3 className="md:text-4xl text-2xl font-semibold text-white ">
                  5 <span>+</span>
                </h3>
                <p className="text-xs md:text-base">
                  <span>Projects</span>
                </p>
              </div>
              <div className="bg-gray-800/40 p-4 pl-5 my-1 rounded-lg w-36">
                <h3 className="md:text-4xl text-2xl font-semibold text-white">
                  4 <span>+</span>
                </h3>
                <p className="text-xs md:text-base">
                  <span>Hackathons Attended</span>
                </p>
              </div>
              <div className="bg-gray-800/40 p-5 rounded-lg">
                <h3 className="md:text-4xl text-2xl font-semibold text-white">
                  10 <span>+</span>
                </h3>
                <p className="text-xs md:text-base">
                  <span>Github Repo</span>
                </p>
              </div>
            </div> */}
          </div>

          <form
            action="https://getform.io/f/apjjyyoa"
            method="POST"
            className="max-w-6xl p-5 md:p-12"
            id="form"
          >
            <p className="text-gray-100 font-bold text-xl mb-2">
              Let's connect!
            </p>
            <input
              type="text"
              id="name"
              placeholder="Your Name ..."
              name="name"
              className="mb-2 w-full rounded-md outline-none focus:ring-[3px] focus:ring-purple-500 py-2 pl-2 pr-3 cursor-text "
            />
            <input
              type="email"
              id="email"
              placeholder="Your Email ..."
              name="email"
              className="mb-2 w-full rounded-md outline-none focus:ring-[3px] focus:ring-purple-500 py-2 pl-2 pr-3"
            />
            <textarea
              name="textarea"
              id="textarea"
              cols="30"
              rows="4"
              placeholder="Your Message ..."
              className="mb-2 w-full rounded-md outline-none focus:ring-[3px] focus:ring-purple-500 py-2 pl-2 pr-3"
            />
            <button
              type="submit"
              onClick={() => setClicked(true)}
              className={`w-full py-3 rounded-md text-gray-100 font-semibold text-xl hover:shadow-[0_0_15px_#a44df7] transition duration-300 ${
                clicked ? "bg-purple-950" : "bg-purple-500"
              }`}
            >
              Send Message
            </button>
          </form>
        </div>
      </Reveal>
    </div>
  );
};

export default Contact;
