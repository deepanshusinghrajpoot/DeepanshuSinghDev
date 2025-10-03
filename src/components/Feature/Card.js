import React from "react";
import { HiArrowRight } from "react-icons/hi";

export default function Card({ dataCard_1 }) {

    return (
        <div className="w-[311px] px-6  xl:px-12 h-auto  xl:py-10 rounded-lg shadow-shadowOne flex items-center 
                       bg-gradient-to-r from-bodyColor to-[#202327] group 
                       hover:bg-gradiant-to-b hover:from-black hover:to-[#1e2024] 
                       transition-colors
                       duration-100">
            <div className="h-70               overflow-y-hidden  group">
                <div className="flex h-full flex-col gap-8          translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                    <div>
                        <span className="text-4xl text-designColor">{dataCard_1.icon}</span>
                    </div>
                    <div className="flex flex-col gap-8">
                        <h2 className=" text-xl  lgl:text-2xl font-titleFont tex-gray-300 font-bold">{dataCard_1.title}</h2>
                        <p className="base">{dataCard_1.des}</p>
                        <span className=" text-sm lgl:text-2xl text-designColor">
                            <HiArrowRight />
                        </span>
                    </div>
                    
                </div>
            </div>

        </div>
    )
}
