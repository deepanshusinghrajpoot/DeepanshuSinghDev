import React from 'react';

import LeftBanner from './LeftBanner';
import RightBanner from './RightBanner';



export default function Banner() {

  return (
    <section id="home"
      className="w-full pt-30 pb-20       flex flex-col lgl:flex-row    items-center border-b-[1px] border-b-black ">

      <LeftBanner/>
      
      <RightBanner/>

     
    </section>
  )
}
