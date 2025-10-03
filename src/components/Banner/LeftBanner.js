
import React from 'react';
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebookF, FaLinkedin, FaNodeJs, FaReact, FaTwitter } from "react-icons/fa";
import { SiMongodb, SiTailwindcss } from "react-icons/si"

export default function LeftBanner() {
  const [text] = useTypewriter({
    words: ["Professional coder.", "Full Stack Developer(MERN).", "DSA Lover.",],
    loop: true,
    typeSpeed: 10,
    deleteSpeed: 20,
    delaySpeed: 2000,
  })
  return (
    <div className=" w-full lgl:w-1/2                flex flex-col gap-20">
      <div className="      flex flex-col    gap-5">
        <h4 className="text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-5xl font-bold text-white">
          {" "}
          Hi, I'm {" "}
          <span className="text-designColor capitalize">Deepanshu Singh</span>
        </h1>
        <h2 className="text-4xl font-bold text-white"
        >a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor='#ff014f'
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          I use react for making this portfoliyo to repersent our
          skill and qualification also repersent our project which is made for
          longer time.Thanks to view our portfoliyo.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row xl:gap-0  gap-6">
        <div className="ml-5px">
          <h2 className="text-base uppercase font-titleFont mb-4">
            FIND ME IN
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaFacebookF />
            </span>
            <span className="bannerIcon">
              <FaTwitter />
            </span>
            <span className="bannerIcon">
              <FaLinkedin />
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <FaNodeJs />
            </span >
            <span className="bannerIcon">
              <SiMongodb />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
          </div>
        </div>
      </div>

    </div>
  )
}
