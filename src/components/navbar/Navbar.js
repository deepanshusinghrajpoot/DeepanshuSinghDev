import React, { useState } from 'react';
import {  my_photo, signature } from "../../assets/index";
import { FiMenu } from "react-icons/fi";
import {navLinksData} from "../../constants/index";
import {Link} from "react-scroll";
import { MdClose } from 'react-icons/md';
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";


export default function Navbar() {

    const [showMenu , setShowMenu ] = useState(false);

  return (
    <div className="w-full h-24 mx-auto        sticky top-0 z-50 bg-bodyColor       flex justify-between items-center     font-titleFont      border-b-[1px] border-b-gray-600" >
        <div className =" w-full h-18 flex">
                    <img src={my_photo} alt="logo"  className = "w-20 h-20 rounded-full"/>
                    <div className="w-40 pt-6">
                        <img src={signature} alt="signature logo" className='w-full'/>
                    </div>
        </div>
        <div>
            <ul className=" hidden mdl:inline-flex items-center  gap-6 lg:gap-10">
                {
                    navLinksData.map(({_id, title, link})=>{
                        return(
                            <li className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300" key={_id}>
                                <Link 
                                        activeClass="active" 
                                        to={link} 
                                        spy={true}
                                        smooth={true}
                                        offset ={-70}
                                        duration = {500}
                                        
                                        >{title}</Link>
                             </li>

                        )
                        
                    })
                }
            </ul>
            <span  onClick={()=>setShowMenu(!showMenu)}
            className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer">
                <FiMenu/>
            </span>
            {
                showMenu && (
                    <div className="w-[80%]  h-screen overflow-scroll absolute top-0 left-0 py-4 bg-gray-900 *:p-4 scrollbar-hide">
                        <div>
                          <div>
                            <div className="flex flex-col gap-8 py-2 relative ">
                              <img  className="w-32 "  src={my_photo}  alt="logo"/>
                              <p>
                                Welcome To My Website,
                                I am Deepanshu Singh I introduce self through this portfoliyo.
                                In this portfoliyo i include many important section which through i introfuce what type of project made and which technical toll use for building real life project 

                              </p>
                            </div>
                            <ul className="flex flex-col gap-6 mt-9">
                                {
                                    navLinksData.map((data,i)=>{
                                        return (
                                         <li onClick={()=> setShowMenu(!showMenu)} 
                                            className=" text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300 " 
                                              key={i}>
                                            <Link 
                                               activeClass="active" 
                                               to={data.link}
                                               spy={true}
                                               smooth={true}
                                               offset={-70}
                                               duration={500}
                                               >
                                                {data.link}
                                            </Link> 
                                         </li>
                                        )
                                    })
                                }
                            </ul>
                            <span   onClick={()=>setShowMenu(!showMenu)}
                                    className="absolute top-4 right-4 text-gray-400 hover:text-designColor 
                                     duration:300 text-2xl cursor-pointer">
                               <MdClose/>
                           </span>
                        </div>
                            <span className="absolute top-0 left-4  text-gray-400 duration-500 hover:text-designColor">
                                <FiMenu/>
                            </span>
                        </div>
                        <div className="flex flex-col xl:flex-row xl:gap-0  gap-5">
                             <div>
                                   <h2 className="text-base uppercase font-titleFont mb-4">
                                   FIND ME IN
                                   </h2>
                                   <div className="flex gap-4">
                                       <span className="bannerIcon">
                                          <FaLinkedin/>
                                       </span>
                                      <span className="bannerIcon">
                                          <FaTwitter/>
                                       </span>
                                   <span className="bannerIcon">
                                        <FaFacebook/>
                                    </span>
                                 </div>
                            </div>
                         </div>
                  </div>
                      
                )   
            }
           
        </div>
     </div>
   
  )
}

