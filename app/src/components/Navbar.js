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

        <div className='text-xl font-medium flex items-center gap-10'>
          <div>Home</div>
          <div>Car Gallery</div>
          <div>Services</div>
          <div>Follow</div>
        </div>


        <div className='flex items-center gap-4'>
          <div className='p-4 border-2 bg-white rounded-full'>
          </div>
          <DotsThreeVertical className='text-white font-semibold' size={50} />
        </div>
      </div>
    </div>
  )
}

export default Navbar
