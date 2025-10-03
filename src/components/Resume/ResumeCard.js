import React from 'react'

export default function ResumeCard({resumeData}) {



  return (
    <div className="w-[300px] lg:w-[600px] lgl:w-[600px]  xl:w-[600px] md:w-full h-auto  bg-opacity  group             flex ">
        <div className=" w-10 h-[7px] mt-16 relative                  bgOpacity       ">
                <span className="absolute w-5 h-5 rounded-full  -top-3 -left-4    bg-black   flex justify-center items-center    bg-opacity-60   ">
                    <span className="w-3 h-3 rounded-full bg-bodyColor group-hover:bg-designColor flex-inline  items-center" ></span>
                </span>
        </div>
        
        <div className="w-full bg-black bg-opacity-20 hover:bg-opacity-30 duration-300 rounded-lg  p-4 lgl:px-10 h-auto    flex flex-col items-center  gap-6 lgl:gap-10   shadow-shadowOne">
            <div className="flex flex-col lgl:flex-row lgl:justify-center lgl:items-center gap-1">
                <div className="flex flex-col gap-1">
                      <h3 className="text-xl md:text-2xl mt-3 font-semibold group-hover:text-white duration-300">{resumeData.title}</h3>
                      <p>{resumeData.subTitle}</p>
                 </div>
           
                 <div  className="flex flex-col gap-5 mt-1">
                      <p className="px-4 py-2 text-designColor bg-black bg-opacity-25 rounded-lg flex justify-center items-center shadow-shadowOne text-sm font-medium">
                          {resumeData.result}
                      </p>
                 </div>
            </div>
            <div>
                 <p className=" w-full  text-sm md:text-basee font-midium text-gray-400 group-hover:text-gray-300 duration-300">{resumeData.des}</p>
            </div> 
            
        </div>
       
    </div>
  )




}
