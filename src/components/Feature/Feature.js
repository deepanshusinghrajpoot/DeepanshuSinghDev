import React from "react";
import Title from "../LayOuts/Title";
import Card from "./Card";

import { FaBars, FaCode, FaDev, FaPalette, FaPlug, FaProjectDiagram } from "react-icons/fa";
// import { SiSkillshare } from "react-icons/si";

export default function Feature() {
  return (
    <section id="features"
      className="w-full h-auto py-20      border-b-[1px] border-b-black " >
    
      <Title data = {{title:"Feature" , des:"What I do"}}/>
      <div className=" grid grid-cols-1    sm:flex justify-center items-center flex-wrap     lgl:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20  mt-3           ">  


          <Card dataCard_1 ={{
               title: "Web Development",
               des: "Build responsive, modern websites using React.js and Tailwind CSS that work seamlessly on all devices.",
               icon: <FaDev />
           }}/>

          <Card dataCard_1 ={{
               title: "Backend Development",
               des: "Design and implement secure RESTful APIs with Node.js, Express, and MongoDB for scalable applications.",
               icon: <FaCode />
          }}/>

          <Card dataCard_1 ={{
               title: "DSA With C++",
               des: "Strong foundation in Data Structures & Algorithms using C++ for problem-solving.",
               icon: <FaBars />
          }}/>

          <Card dataCard_1 ={{
               title: "UI/UX Design",
               des: "Create clean, user-friendly interfaces that focus on excellent user experience and accessibility.",
               icon: <FaPalette />
          }}/>

          <Card dataCard_1 ={{
               title: "Full-Stack Projects",
               des: "Deliver end-to-end web applications, connecting frontend and backend with optimized performance.",
               icon: <FaProjectDiagram />
          }}/>

          <Card dataCard_1 ={{
              title: "API Integration",
              des: "Integrate third-party APIs and payment gateways like Stripe & Razorpay efficiently.",
              icon: <FaPlug />
          }}/>

      </div>
    
    </section>
  )
}
