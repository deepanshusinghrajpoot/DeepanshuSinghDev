import React from 'react'
import ResumeCard from "./ResumeCard";

export default function Education() {
  return (
    <div>
           <div className="py-12 font-titelFont gap-4">
                <p className="text-sm text-designColor tracking-[4px]">2008-2026</p>
                <h2 className="text-4xl font-bold">Education Quality</h2>
            </div>


          <div className="flex justify-center flex-wrap gap-10">
            <div>
               <div className="py-12 font-titelFont gap-4">
                    <p className="text-sm text-designColor tracking-[4px]">2021-2026</p>
                    <h2 className="text-2xl font-bold">College Education</h2>
               </div>
               <div className="mt-14 w-[300px] h-auto  lg:w-[600px] lgl:w-[600px]  xl:w-[600px] md:w-full     flex flex-col gap-10            border-l-[8px] border-l-black border-opacity-30   ">
                    <ResumeCard resumeData={{
                        title: "Information Technology",
                        subTitle: "Dr. Ambedkar Institute Of Thechnology For Divyanggan",
                        result: "78 CGPA",
                        des: `My college is the one of the goverment engeeniring college .
                        Its tech enviornment is very excelant`
                    }} />
                    <ResumeCard resumeData={{
                        title: "Information Technology",
                        subTitle: "Dr. Ambedkar Institute Of Thechnology For Divyanggan",
                        result: "78 CGPA",
                        des: `My college is the one of the goverment engeeniring college .
                               Its tech enviornment is very excelant`
                    }} />
                </div>
            </div>
            <div>
               <div className="py-12 font-titelFont gap-4">
                    <p className="text-sm text-designColor tracking-[4px]">2008-2021</p>
                    <h2 className="text-2xl font-bold">School Education</h2>
               </div>
               <div className="mt-14   w-[300px] lg:w-[600px] lgl:w-[600px]  xl:w-[600px] md:w-full h-auto        flex flex-col gap-10            border-l-[8px] border-l-black border-opacity-30   ">
                    <ResumeCard resumeData={{
                        title: "Information Technology",
                        subTitle: "Dr. Ambedkar Institute Of Thechnology For Divyanggan",
                        result: "78 CGPA",
                        des: `My college is the one of the goverment engeeniring college .
                        Its tech enviornment is very excelant`
                    }} />
                    <ResumeCard resumeData={{
                        title: "Information Technology",
                        subTitle: "Dr. Ambedkar Institute Of Thechnology For Divyanggan",
                        result: "78 CGPA",
                        des: `My college is the one of the goverment engeeniring college .
                               Its tech enviornment is very excelant`
                    }} />
                </div>
             </div>

                
          </div>
    </div>
  )
}
