"use client"

import React from 'react'
import Background from '@/components/Background'
import { FaCarSide } from "react-icons/fa";
import Image from 'next/image'

const page = () => {
  return (
    <div className='w-full py-8 px-10'>
      <Background />

      <div className='px-10'>

        <div className='flex items-center gap-2 text-5xl font-medium'>
          <Image
            src="/logo/service.png"
            alt="BMW Logo"
            width={50}
            height={50}
            priority
          />
          <div>Elite Auto Shine Services</div>
        </div>

        <div className='italic font-normal text-gray-300 opacity-80 text-xl mt-5'>
          We bring perfection to your car, combining expert care with cutting-edge detailing
        </div>

        <div className='flex items-center justify-center space-x-15 mt-5'>

          <div className='text-2xl font-medium bg-white/20 px-8 py-4 rounded-xl hover:bg-white/90 hover:text-black transition-all'>
            Exterior Detailing
          </div>

          <div className='text-2xl font-medium bg-white/20 px-8 py-4 rounded-xl hover:bg-white/90 hover:text-black transition-all'>
            Interior Detailing
          </div>

          <div className='text-2xl font-medium bg-white/20 px-8 py-4 rounded-xl hover:bg-white/90 hover:text-black transition-all'>
            Special Treatments
          </div>
        </div>

        <div className='w-full h-full flex items-center justify-center mt-10'>
          <div className='w-[70%] bg-white/25 py-5 px-5'>

            <div className='flex flex-col gap-4 w-[60%]'>
              
                <FaCarSide size={50} color='black' className='bg-white p-2 shadow-sm shadow-gray-700'/>
              <div className='text-4xl font-medium'>Exterior Detailing</div>
              <div className='text-md leading-relaxed  max-w-[100%]'>
                “Restore your vehicles showroom finish with precision care — from deep hand washes to advanced paint correction and ceramic coating for a flawless shine.”
              </div>

              <button className='bg-white py-2 px-4 text-black font-medium rounded-xl max-w-56'>
                Learn More
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default page
