import React from "react";
import Title from "../LayOuts/Title";
import Card from "./Card";

import { FaBars, FaCode, FaDev } from "react-icons/fa";
// import { SiSkillshare } from "react-icons/si";

export default function Feature() {
  return (
    <section id="features"
      className="w-full h-auto py-20      border-b-[1px] border-b-black " >
    
      <Title data = {{title:"Feature" , des:"What I do"}}/>
      <div className=" grid grid-cols-1    sm:flex justify-center items-center flex-wrap     lgl:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20  mt-3           ">  

          <Card dataCard_1 = {{
             title:"Good Coder" , 
             des:"lorem ipsum data for demo purpose so you can understand what we write here",
             icon:<FaCode/>                  
          }}/>
          <Card dataCard_1 = {{
             title:"Good Developer" , 
             des:"lorem ipsum data for demo purpose so you can understand what we write here", 
             icon:<FaDev/>                
          }}/>
          <Card dataCard_1 = {{
             title:"DSA With C++" , 
             des:"lorem ipsum data for demo purpose so you can understand what we write here", 
             icon:<FaBars/>                 
          }}/>
          

          <Card dataCard_1 = {{
             title:"Good Coder" , 
             des:"lorem ipsum data for demo purpose so you can understand what we write here",
             icon:<FaCode/>                  
          }}/>
          <Card dataCard_1 = {{
             title:"Good Developer" , 
             des:"lorem ipsum data for demo purpose so you can understand what we write here", 
             icon:<FaDev/>                
          }}/>
          <Card dataCard_1 = {{
             title:"DSA With C++" , 
             des:"lorem ipsum data for demo purpose so you can understand what we write here", 
             icon:<FaBars/>                 
          }}/>
      </div>
    
    </section>
  )
}
