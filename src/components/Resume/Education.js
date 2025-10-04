import React from 'react'
import ResumeCard from "./ResumeCard";


export default function Education() {
  const collegeData = [
    {
      title: "Information Technology",
      subTitle: "Dr. Ambedkar Institute Of Technology For Divyangjan",
      result: "7.9 CGPA",
      des: "My college is one of the government engineering colleges. Its tech environment is very excellent.",
    },
    {
      title: "Web Development & MERN Stack",
      subTitle: "Self Learning & Projects",
      result: "Practical Knowledge",
      des: "Built multiple full-stack projects with React.js, Node.js, Express, and MongoDB.",
    },
  ];

  const schoolData = [
    {
      title: "Higher Secondary Education",
      subTitle: "Pt. Deen Dyal Enter College Maharajganj, Uttar Pardesh",
      result: "87.33%",
      des: "Focused on science and mathematics, developed strong problem-solving and logical skills.",
    },
    {
      title: "High School",
      subTitle: "Pt. Deen Dyal Enter College Maharajganj, Uttar Pardesh",
      result: "86.32%",
      des: "Built strong foundations in academics with active participation in extracurricular activities.",
    },
  ];

  return (
    <div>
      {/* Section Title */}
      <div className="py-12 font-titelFont gap-4">
        <p className="text-sm text-designColor tracking-[4px]">2007-2026</p>
        <h2 className="text-4xl font-bold">Education Quality</h2>
      </div>

      {/* Education Grid */}
      <div className="flex justify-center flex-wrap gap-10">
        
        {/* College Education */}
        <div>
          <div className="py-12 font-titelFont gap-4">
            <p className="text-sm text-designColor tracking-[4px]">2022-2026</p>
            <h2 className="text-2xl font-bold">College Education</h2>
          </div>
          <div className="mt-14 w-[300px] lg:w-[600px] flex flex-col gap-10 border-l-[8px] border-l-black border-opacity-30">
            {collegeData.map((item, index) => (
              <ResumeCard key={index} resumeData={item} />
            ))}
          </div>
        </div>

        {/* School Education */}
        <div>
          <div className="py-12 font-titelFont gap-4">
            <p className="text-sm text-designColor tracking-[4px]">2007-2021</p>
            <h2 className="text-2xl font-bold">School Education</h2>
          </div>
          <div className="mt-14 w-[300px] lg:w-[600px] flex flex-col gap-10 border-l-[8px] border-l-black border-opacity-30">
            {schoolData.map((item, index) => (
              <ResumeCard key={index} resumeData={item} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
