import React from 'react'
import { contactImg } from '../../assets/index'
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa'




export const ContactLeft = () => {
    return (
        <div className='  h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 rounded-lg shadow-shadowOne  flex flex-col gap-8 justify-center     '>
            <img className='      flex             h-64 object-cover rounded-lg ' src={contactImg} alt="contactImg" />
            <div className='flex flex-col gap-4 '>
                <h3 className='text-3xl font-bold text-white'>Deepanshu Singh</h3>
                <p className='"text-lg font-normal text-gray-400'>
                    MERN Stack Developer
                </p>
                <p className=' w-[100%]  text-base text-gray-400 tracking-wide'>
                    scgh dgeiuek fgwiun vwegfheojn vhewgifhdn vdygb vefub veuihb  gdhb gedhn  vegdh vfihd vfhedjb cdwgjhb
                </p>
                <p className='text-base text-gray-400 flex items-center gap-2'>
                    Phone: <span className='text-lightText'>+84 00119700</span>
                </p>
                <p className=' w-[80%] text-base text-gray-400 flex items-center gap-2 flex-wrap'>
                    Email:{" "}
                    <span className=' w-[100%] text-lightText text-wrap '>deepanshusingh20022004@gmail.com</span>
                </p>
            </div>
            <div className='flex flex-col gap-4'>
                <h2 className='"text-base uppercase font-titleFont md-4'>
                    Find me in
                </h2>
                <div className='flex gap-4'>
                    <span className='bannerIcon'><FaLinkedinIn /></span>
                    <span className='bannerIcon'><FaTwitter /></span>
                    <span className='bannerIcon'><FaFacebookF /></span>
                </div>
            </div>
        </div>
    )
}
