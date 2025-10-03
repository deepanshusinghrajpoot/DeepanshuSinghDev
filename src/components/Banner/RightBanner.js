import React from 'react'
import { deepanshu_black, deepanshuSignature, my_photo } from '../../assets'

export default function RightBanner() {
    return (
        <div className="  h-[650px] w-full  lgl:w-1/2        flex justify-center items-center relative">
            <img
                className=" w-[300px] h-[350px] rounded-xl lgl:w-[400px] lgl:h-[450px] z-10"
                src={my_photo}
                alt="deepnshu-Img"

            />
        </div>
    )
}
