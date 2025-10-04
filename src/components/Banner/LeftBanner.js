
import React from 'react';
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebookF, FaLinkedin, FaNodeJs, FaReact, FaTwitter } from "react-icons/fa";
import { SiMongodb, SiTailwindcss } from "react-icons/si"

export default function LeftBanner() {
  const [text] = useTypewriter({
    words: ["MERN Stack Developer", "Full-Stack Engineer", "Problem Solver", "Clean Code Enthusiast", "API Designer & Integrator", "Scalable System Builder", "Passionate Coder", "Continuous Learner"],
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
           I specialize in building modern, scalable web applications using the MERN stack.
           This portfolio showcases my skills, qualifications, and projects crafted with dedication.
           Thank you for visiting!
        </p>
      </div>
      <div className="flex flex-col xl:flex-row xl:gap-8  gap-6">
        <div className="ml-5px">
          <h2 className="text-base uppercase font-titleFont mb-4">
            FIND ME IN
          </h2>
         <div className="flex gap-4">
              <a 
                  href="https://www.linkedin.com/in/deepanshu-singh-963139259/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bannerIcon"
              >
                <FaLinkedin />
              </a>
              <a 
                  href="https://x.com/DeepanshuS45573" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bannerIcon"
              >
                <FaTwitter />
              </a>
  
              <a 
                  href="https://www.facebook.com/profile.php?id=100087912851406" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bannerIcon"
               >
                 <FaFacebookF />
              </a>
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
