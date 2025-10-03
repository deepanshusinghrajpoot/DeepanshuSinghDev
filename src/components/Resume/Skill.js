import React from 'react'
import {motion} from "framer-motion"




export default function Skill() {
  return (
    <div>
            <div className="pt-3 pb-2 font-titelFont gap-4">
                <p className="text-sm text-designColor tracking-[4px]">2008-2026</p>
                <h2 className="text-4xl font-bold">Skill</h2>
            </div>


          <div className="flex justify-center flex-wrap gap-2 ">
            <div className="overflow-x-hidden flex flex-col items-center gap-4">
               <div className="py-12 font-titelFont gap-4">
                    <p className="text-sm text-designColor tracking-[4px]">2021-2026</p>
                    <h2 className="text-2xl font-bold">Technical Skill</h2>
               </div>
               <div>
                   <p className="text-sm uppercase font-medium">HTML</p>
                   <span className="  lgl:w-[600px] xl:w-[600px] h-2 w-[300px]      bgOpacity inline-flex roundend-md mt-2 rounded-md  ">
                      <motion.span 
                                 initial={{x: "-100%" , opacity:0}}
                                 animate={{x:0, opacity:1}}
                                 transition={{duration:0.5 , delay:0.5}}
                                 className="w-[85%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative ">
                                        <span className="absolute -top-7 right-0"> 85%</span>

                      </motion.span>
                    </span>
                </div>
                <div>
                   <p className="text-sm uppercase font-medium">CSS</p>
                   <span className=" lgl:w-[600px] xl:w-[600px] h-2 w-[300px]      bgOpacity inline-flex roundend-md mt-2 rounded-md  ">
                      <motion.span 
                                 initial={{x: "-100%" , opacity:0}}
                                 animate={{x:0, opacity:1}}
                                 transition={{duration:0.5 , delay:0.5}}
                                 className="w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative ">
                                        <span className="absolute -top-7 right-0"> 90%</span>

                      </motion.span>
                    </span>
                </div>
               <div>
                  <p className="text-sm uppercase font-medium">Java Script</p>
                  <span className=" lgl:w-[600px] xl:w-[600px] h-2 w-[300px]         bgOpacity inline-flex roundend-md mt-2 rounded-md  ">
                    <motion.span 
                                 initial={{x: "-100%" , opacity:0}}
                                 animate={{x:0, opacity:1}}
                                 transition={{duration:0.5 , delay:0.5}}
                                 className="w-[95%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative ">
                                        <span className="absolute -top-7 right-0"> 95%</span>

                    </motion.span>
                  </span>
               </div>
               <div>
                   <p className="text-sm uppercase font-medium">React</p>
                   <span className=" lgl:w-[600px] xl:w-[600px] h-2 w-[300px]         bgOpacity inline-flex roundend-md mt-2 rounded-md  ">
                      <motion.span 
                                 initial={{x: "-100%" , opacity:0}}
                                 animate={{x:0, opacity:1}}
                                 transition={{duration:0.5 , delay:0.5}}
                                 className="w-[92%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative ">
                                        <span className="absolute -top-7 right-0"> 92%</span>

                      </motion.span>
                    </span>
                </div>
                <div>
                   <p className="text-sm uppercase font-medium">Node js</p>
                   <span className=" lgl:w-[600px] xl:w-[600px] h-2 w-[300px]         bgOpacity inline-flex roundend-md mt-2 rounded-md  ">
                      <motion.span 
                                 initial={{x: "-100%" , opacity:0}}
                                 animate={{x:0, opacity:1}}
                                 transition={{duration:0.5 , delay:0.5}}
                                 className="w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative ">
                                        <span className="absolute -top-7 right-0"> 80%</span>

                      </motion.span>
                    </span>
                </div>
                <div>
                   <p className="text-sm uppercase font-medium">Mongo DB</p>
                   <span className=" lgl:w-[600px] xl:w-[600px] h-2 w-[300px]       bgOpacity inline-flex roundend-md mt-2 rounded-md  ">
                      <motion.span 
                                 initial={{x: "-100%" , opacity:0}}
                                 animate={{x:0, opacity:1}}
                                 transition={{duration:0.5 , delay:0.5}}
                                 className="w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative ">
                                        <span className="absolute -top-7 right-0"> 80%</span>

                      </motion.span>
                    </span>
                </div>
                <div>
                   <p className="text-sm uppercase font-medium">NoSQL</p>
                   <span className=" lgl:w-[600px] xl:w-[600px] h-2 w-[300px] sm:w-[300px]        bgOpacity inline-flex roundend-md mt-2 rounded-md  ">
                      <motion.span 
                                 initial={{x: "-100%" , opacity:0}}
                                 animate={{x:0, opacity:1}}
                                 transition={{duration:0.5 , delay:0.5}}
                                 className="w-[92%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative ">
                                        <span className="absolute -top-7 right-0"> 92%</span>

                      </motion.span>
                    </span>
                </div>
                <div>
                   <p className="text-sm uppercase font-medium">C++</p>
                   <span className=" lgl:w-[600px] xl:w-[600px] h-2 w-[300px]       bgOpacity inline-flex roundend-md mt-2 rounded-md  ">
                      <motion.span 
                                 initial={{x: "-100%" , opacity:0}}
                                 animate={{x:0, opacity:1}}
                                 transition={{duration:0.5 , delay:0.5}}
                                 className="w-[95%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative ">
                                        <span className="absolute -top-7 right-0"> 95%</span>

                      </motion.span>
                    </span>
                </div>
                <div>
                   <p className="text-sm uppercase font-medium">DSA</p>
                   <span className="lgl:w-[600px] xl:w-[600px] h-2 w-[300px]   bgOpacity inline-flex roundend-md mt-2 rounded-md  ">
                      <motion.span 
                                 initial={{x: "-100%" , opacity:0}}
                                 animate={{x:0, opacity:1}}
                                 transition={{duration:0.5 , delay:0.5}}
                                 className="w-[70%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative ">
                                        <span className="absolute -top-7 right-0"> 70%</span>

                      </motion.span>
                    </span>
                </div>
              
            </div>
          </div>
    </div>
  )
}


