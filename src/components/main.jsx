import React from "react";
import bg from "../assets/Nature.jpg";
import { TypeAnimation } from "react-type-animation";
import { FaTwitter, FaInstagram, FaFacebook, FaGithub } from "react-icons/fa";

const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left scale-x-[-1]"
        src={bg}
        alt="/"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div className="max-w-[700px] mx-auto w-full h-full flex flex-col justify-center items-center md:items-start">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            I,m Saeed Ahmadi
          </h1>
          <h2 className="flex gap-2 text-2xl md:text-3xl pt-3  text-gray-800 ">
            My skills are
            <TypeAnimation
              sequence={[
                "React js", // Types 'One'
                1000, // Waits 1s
                "Tailwind", // Deletes 'One' and types 'Two'
                1000, // Waits 2s
                "next js", // Types 'Three' without deleting 'Two'
                1000,
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: "1em" }}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <FaTwitter className="cursor-pointer" size={20} />
            <FaFacebook className="cursor-pointer" size={20} />
            <FaGithub className="cursor-pointer" size={20} />
            <FaInstagram className="cursor-pointer" size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
