import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { my_photo, signature } from '../../assets'

export const Footer = () => {
  return (
    <div className='w-full py-20 h-auto border-b-[1px] border-b-black      flex flex-wrap justify-between'>
        <div className='w-[340px] px-6  py-6 xl:px-12 h-auto  xl:py-10 rounded-lg shadow-shadowOne flex items-center                flex-col gap-8'>
                <div className =" w-full h-18 flex">
                            <img src={my_photo} alt="logo"  className = "w-20 h-20 rounded-full"/>
                            <div className="w-40 pt-6">
                                 <img src={signature} alt="signature logo" className='w-full'/>
                            </div>
                </div>
                <div className='flex gap-4'>
                            <span className='bannerIcon'><FaLinkedinIn /></span>
                            <span className='bannerIcon'><FaTwitter /></span>
                            <span className='bannerIcon'><FaFacebookF /></span>
                </div>
        </div>
        <div className='w-[340px] h-auto  xl:py-10  flex   flex-col gap-8 mt-20 '>
               <h3 className='text-xl uppercase text-designColor tracking-wider'>
                  Quick Link
               </h3>
               <ul className='flex flex-col gap-4 font-titleFont font-medium   overflow-hidden'>
                   <li><span className='w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group'>About{" "} <span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0  -translate-x-[100%] group-hover:translate-x-0  transition-transform duration-300'></span></span></li>
                   <li><span className='w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group'>Portfolio{" "} <span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0  -translate-x-[100%] group-hover:translate-x-0  transition-transform duration-300'></span></span></li>
                   <li><span className='w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group'>Services{" "} <span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0  -translate-x-[100%] group-hover:translate-x-0  transition-transform duration-300'></span></span></li>
                   <li><span className='w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group'>Blog{" "} <span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0  -translate-x-[100%] group-hover:translate-x-0  transition-transform duration-300'></span></span></li>
                   <li><span className='w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group'>Contact{" "} <span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0  -translate-x-[100%] group-hover:translate-x-0  transition-transform duration-300'></span></span></li>
               </ul>
        </div>
        <div className='w-[340px] h-auto  xl:py-10  flex   flex-col gap-8  mt-20'>
               <h3 className='text-xl uppercase text-designColor tracking-wider'>
                  Resources
               </h3>
               <ul className='flex flex-col gap-4 font-titleFont font-medium   overflow-hidden'>
                   <li><span className='w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group'>Authentication{" "} <span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0  -translate-x-[100%] group-hover:translate-x-0  transition-transform duration-300'></span></span></li>
                   <li><span className='w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group'>System Status{" "} <span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0  -translate-x-[100%] group-hover:translate-x-0  transition-transform duration-300'></span></span></li>
                   <li><span className='w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group'>Terms of Service{" "} <span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0  -translate-x-[100%] group-hover:translate-x-0  transition-transform duration-300'></span></span></li>
                   <li><span className='w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group'>Pricing{" "} <span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0  -translate-x-[100%] group-hover:translate-x-0  transition-transform duration-300'></span></span></li>
                   <li><span className='w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group'>Over Right{" "} <span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0  -translate-x-[100%] group-hover:translate-x-0  transition-transform duration-300'></span></span></li>
               </ul>
        </div>
        <div className='w-[340px] h-auto  xl:py-10  flex   flex-col gap-8   mt-20'>
               <h3 className='text-xl uppercase text-designColor tracking-wider'>
                  Developers
               </h3>
               <ul className='flex flex-col gap-4 font-titleFont font-medium    overflow-hidden'>
                   <li><span className='w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group'>Documentation{" "} <span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0  -translate-x-[100%] group-hover:translate-x-0  transition-transform duration-300'></span></span></li>
                   <li><span className='w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group'>Authentication{" "} <span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0  -translate-x-[100%] group-hover:translate-x-0  transition-transform duration-300'></span></span></li>
                   <li><span className='w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group'>API Reference{" "} <span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0  -translate-x-[100%] group-hover:translate-x-0  transition-transform duration-300'></span></span></li>
                   <li><span className='w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group'>Support{" "} <span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0  -translate-x-[100%] group-hover:translate-x-0  transition-transform duration-300'></span></span></li>
                   <li><span className='w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group'>Open Source{" "} <span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0  -translate-x-[100%] group-hover:translate-x-0  transition-transform duration-300'></span></span></li>
               </ul>
        </div>
    </div>
  )
}
