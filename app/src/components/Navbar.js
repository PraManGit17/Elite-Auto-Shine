"use client";
import React, { createContext } from "react";
import Image from 'next/image'
import { DotsThreeVertical } from 'phosphor-react';

const Navbar = () => {
  return (
    <div className='p-2 w-full'>
      <div className='flex items-center justify-between px-15 py-2 rounded-full'>

        <div className='flex items-center gap-2'>
          <Image
            src='/logo.png'
            alt='Logo'
            width={45}
            height={45}
          />
          <div className='text-2xl font-semibold '>Elite Shine Auto</div>
        </div>

        <div className="text-xl flex items-center text-gray-300 opacity-70 gap-10">
          <div className="relative hover:scale-110 hover:text-white hover:mb-1 hover:cursor-pointer transition-all hover:font-medium hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.9)]
                 ">
            Brands
          </div>

          <div className="relative hover:scale-110 hover:text-white hover:mb-1 hover:cursor-pointer transition-all hover:font-medium hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.9)]
                 ">
            Car Gallery
          </div>

          <div className="relative hover:scale-110 hover:text-white hover:mb-1 hover:cursor-pointer transition-all hover:font-medium hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.9)]
                 ">
            Services
          </div>

          <div className="hover:scale-110 hover:text-white hover:mb-1 hover:cursor-pointer transition-all hover:font-medium hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.9)]">
            Follow
          </div>
        </div>


      </div>
    </div>
  )
}

export default Navbar
