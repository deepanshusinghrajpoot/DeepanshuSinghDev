import React from 'react'
import { FaGithub, FaGlobe } from "react-icons/fa"

export default function ProjectCard({ project_data }) {
  
  return (
    <div>
      <div className="w-[311px] h-auto   ">
        <div className="w-[340px] p-4 xl:px-12 h-[400px] xl:py-10 rounded-lg shadow-shadowOne flex flex-col items-center 
                       bg-gradient-to-r from-bodyColor to-[#202327] group 
                       hover:bg-gradiant-to-b hover:from-black hover:to-[#1e2024] 
                       transition-colors
                       duration-100" >

          <div className="w-full h-[80%] overflow-hidden rounded-lg ">
            <img className="w-full h-60    object-cover    group-hover:scale-110 duration-300 cursor-pointer  " src={project_data.src} alt="pro-1" />
          </div>


          <div className=" flex flex-col gap-4">
            <div className="flex justify-between mt-5 gap-6">
              <h3 className="text-lg text-designColor">{project_data.title}</h3>
              <div className="flex justify-between items-center gap-5 ">
                < span className="text-lg w-10 h-10 rounded-full bg-black    flex justify-center items-center    text-gray-50
                                  hover:text-designColor duration-300 cursor-pointer"
                ><FaGithub /></span>
                <span className="text-lg w-10 h-10 rounded-full bg-black  flex justify-center items-center     text-gray-50
                                 hover:text-designColor duration-300 cursor-pointer"
                ><FaGlobe /></span>
              </div>
            </div>
            <div>
                <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">{project_data.des}</p>
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}
