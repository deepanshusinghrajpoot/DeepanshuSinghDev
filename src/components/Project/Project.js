import React from 'react'
import Title from '../LayOuts/Title'
import ProjectCard from './ProjectCard'
import { projectOne, projectThree, projectTwo } from '../../assets'


export default function Project() {
  return (
     <section id="projects" 
             className="w-full h-auto py-20 border-b-[1px] border-b-black  " >
            <div className=" flex justify-center items-center text-center">
                <Title data={{ title:"VISIT MY PORTFOLIYO AND KEEP YOUR FEEDBACK", des:"My Projects"}}/>
            </div>
            
            <div className=" grid grid-cols-1    sm:flex justify-center items-center flex-wrap      lgl:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20  mt-8 ">
              
                <ProjectCard project_data = {
                    {
                      title:"SOCIAL MEDIA CLONE",
                      des:"This is project description. I describe our project any also including uses skill ",
                      src:projectOne
                    }
                } 
                           />
                <ProjectCard project_data = {
                    {
                      title:"SOCIAL MEDIA CLONE",
                      des:"This is project description. I describe our project any also including uses skill ",
                      src:projectTwo
                    }
                } 
                          />
                <ProjectCard project_data = {
                    {
                      title:"SOCIAL MEDIA CLONE",
                      des:"This is project description. I describe our project any also including uses skill ",
                      src:projectThree
                    }
                } 
                          />
                <ProjectCard project_data = {
                    {
                      title:"SOCIAL MEDIA CLONE",
                      des:"This is project description. I describe our project any also including uses skill ",
                      src:projectOne
                    }
                } 
                          />
                <ProjectCard project_data = {
                    {
                      title:"SOCIAL MEDIA CLONE",
                      des:"This is project description. I describe our project any also including uses skill ",
                      src:projectTwo
                    }
                } 
                          />
                <ProjectCard project_data = {
                    {
                      title:"SOCIAL MEDIA CLONE",
                      des:"This is project description. I describe our project any also including uses skill ",
                      src:projectThree
                    }
                } 
                          />
            </div>
             
     </section>
  )
}
