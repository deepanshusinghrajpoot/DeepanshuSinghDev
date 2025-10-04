import React from 'react'
import Title from '../LayOuts/Title'
import ProjectCard from './ProjectCard'
import { projectFoure, projectOne, projectThree, projectTwo } from '../../assets'


export default function Project() {
  return (
    <section
      id="projects"
      className="w-full h-auto py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          data={{
            title: "VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK",
            des: "My Projects",
          }}
        />
      </div>

      <div className="grid grid-cols-1 sm:flex justify-center items-center flex-wrap lgl:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20 mt-8">

        {/* HealthHub */}
        <ProjectCard
          project_data={{
            title: "HealthHub",
            des: "Full-stack hospital management system with role-based access, appointment scheduling, billing, and secure RESTful APIs using MERN stack and Tailwind CSS.",
            src: projectOne,
            github: "https://github.com/deepanshusinghrajpoot/HealthHub",
            live: "https://health-hub-io.vercel.app/",
          }}
        />

        {/* VidyaVahini */}
        <ProjectCard
          project_data={{
            title: "VidyaVahini",
            des: "LMS platform where teachers can set courses, discounts, and students can filter courses. Integrated Stripe for payments, Clerk for authentication, and Context API for state management.",
            src: projectTwo,
            github: "https://github.com/deepanshusinghrajpoot/VidyaVahini",
            live: "https://vidya-vahini.vercel.app/",
          }}
        />

        {/* QuickTalk */}
        <ProjectCard
          project_data={{
            title: "QuickTalk",
            des: "Real-time chat application using WebSockets with MERN stack. Features include group chat, file sharing, and responsive UI with Material UI.",
            src: projectThree,
            github: "https://github.com/deepanshusinghrajpoot/ChatAppOnline",
            live: "https://chat-app-frontend-five-delta.vercel.app/",
          }}
        />

        {/* HealthHub Admin Panel */}
        <ProjectCard
          project_data={{
            title: "HealthHub Admin Panel",
            des: "Admin dashboard for managing users, appointments, departments, and payments. Implements role-based access control and secure REST APIs using Node.js and MongoDB.",
            src: projectFoure,
            github: "https://github.com/deepanshusinghrajpoot/HealthHub",
            live: "https://health-hub-admin-io.vercel.app/",
          }}
        />

        {/* VidyaVahini Payments */}
        <ProjectCard
          project_data={{
            title: "VidyaVahini Payments",
            des: "Implemented course payment flow using Stripe with discounts and secure backend validation, ensuring smooth user experience.",
            src: projectTwo,
            github: "https://github.com/deepanshusinghrajpoot/VidyaVahini",
            live: "https://vidya-vahini.vercel.app/",
          }}
        />

        {/* QuickTalk Features */}
        <ProjectCard
          project_data={{
            title: "QuickTalk Features",
            des: "Advanced features including file sharing, notifications, and responsive design. Uses Redux for state management and WebSockets for real-time updates.",
            src: projectThree,
            github: "https://github.com/deepanshusinghrajpoot/ChatAppOnline",
            live: "https://chat-app-frontend-five-delta.vercel.app/",
          }}
        />

      </div>
    </section>
  );
}
