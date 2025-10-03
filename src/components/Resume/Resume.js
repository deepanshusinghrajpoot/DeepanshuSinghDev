import React, { useState } from "react"
import Title from "../LayOuts/Title";

import Education from "./Education";
import Skill from "./Skill";
import Achivement from "./Achivement";

const Resume = () => {
    let [ResumePart , setResumePart] = useState(<Education/>);
    return (
    <div id="resume"
        className="w-full h-auto py-20 border-b-[1px] border-b-black " >
            <div className="flex justify-center items-center text-center">
                <Title data={
                    {
                        title: "I am a fresher",
                        des: "My Resume"

                    }
                } />
            </div>
            <div>
                <ul className=" w-full flex justify-center flex-wrap items-center gap-2 mt-10 group">
                    <li className="resumeli" onClick={()=>{setResumePart(<Education/>)}} key={1}>Educational </li>
                    <li className="resumeli" onClick={()=>{setResumePart(<Skill/>)}} key={2}>Professional Skill</li>

                    <li className="resumeli" onClick={()=>{setResumePart(<Achivement/>)}} key={4}>Achivements</li>
                </ul>
            </div>
            {ResumePart}
     </div>
    )
}


export default Resume;