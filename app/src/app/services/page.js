"use client"

import React, { useEffect, useRef } from 'react'
import Background from '@/components/Background'
import { FaBolt, FaCarAlt, FaCarSide, FaPalette } from "react-icons/fa"
import Image from 'next/image'
import { gsap } from 'gsap'

const Page = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 0.8 } })

      tl.from(".services-heading", { y: -50, opacity: 0 })
        .from(".services-subheading", { y: -20, opacity: 0 }, "-=0.4")
        .from(".service-card", { y: 50, opacity: 0, stagger: 0.2 })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div className='w-full py-8 px-10' ref={containerRef}>
      <Background />

      <div className='px-10'>
        <div className='flex items-center justify-center gap-2 text-5xl font-medium services-heading'>
          <div>Elite Auto Shine Services</div>
          <Image
            src="/logo/service.png"
            alt="BMW Logo"
            width={50}
            height={50}
            priority
          />
        </div>


        <div className='flex items-center justify-center italic font-normal text-gray-300 opacity-80 text-xl mt-5 services-subheading'>
          We bring perfection to your car, combining expert care with cutting-edge detailing
        </div>


        <div className='flex items-start justify-between px-10 mt-20  gap-6'>
          <div className="w-[40%] bg-black/40 rounded-2xl p-6 flex flex-col items-center text-center border-white/80 service-card">
            <div className="mb-4 flex items-center justify-center w-16 h-16 rounded-full bg-white/20">
              <FaCarAlt size={30} className="text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Luxury Car Showroom Sales</h3>
            <p className="text-sm text-gray-300 leading-relaxed mb-4">
              Exclusive access to a selection of luxury vehicles including Mercedes, BMW, Jaguar, and Land Rover.
            </p>
            <p className="text-sm text-gray-400">Price: <span className="text-white font-medium">$8000 Starting*</span></p>
            <button className="mt-4 px-4 py-2 flex items-center gap-2 rounded-full bg-white text-black font-medium hover:bg-white transition">
              Book a Call <span className="text-lg">→</span>
            </button>
          </div>

          <div className="w-[40%] bg-black/40 rounded-2xl p-6 flex flex-col items-center text-center border-white/80 service-card">
            <div className="mb-4 flex items-center justify-center w-16 h-16 rounded-full bg-white/20">
              <FaCarSide size={30} className="text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">
              Premium Car Detailing
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed mb-4">
              Comprehensive interior and exterior detailing using advanced
              techniques to restore your car showroom shine. Includes deep
              cleaning, paint decontamination, and ceramic protection.
            </p>
            <p className="text-sm text-gray-400">
              Starts at Price: <span className="text-white font-medium">$250</span>
            </p>
            <button className="mt-4 px-4 py-2 flex items-center gap-2 rounded-full bg-white text-black font-medium hover:bg-white transition">
              Book a Call <span className="text-lg">→</span>
            </button>
          </div>

          <div className="w-[40%] bg-black/40 rounded-2xl p-6 flex flex-col items-center text-center border-white/80 service-card">
            <div className="mb-4 flex items-center justify-center w-16 h-16 rounded-full bg-white/20">
              <FaBolt size={30} className="text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Ceramic Coating</h3>
            <p className="text-sm text-gray-300 leading-relaxed mb-4">
              Multi-layer nano-ceramic coating for ultimate gloss, UV resistance, and hydrophobic protection lasting up to 5 years.
            </p>
            <p className="text-sm text-gray-400">
              Starts at Price: <span className="text-white font-medium">$800</span>
            </p>
            <button className="mt-4 px-4 py-2 flex items-center gap-2 rounded-full bg-white text-black font-medium hover:bg-white transition">
              Book a Call <span className="text-lg">→</span>
            </button>
          </div>

          <div className="w-[40%] bg-black/40 rounded-2xl p-6 flex flex-col items-center text-center border-white/80 service-card">
            <div className="mb-4 flex items-center justify-center w-16 h-16 rounded-full bg-white/20">
              <FaPalette size={30} className="text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Custom Vehicle Wraps</h3>
            <p className="text-sm text-gray-300 leading-relaxed mb-4">
              Personalize your car with premium vinyl wraps in gloss, matte, satin, or custom graphics.
            </p>
            <p className="text-sm text-gray-400">
              Starts at Price: <span className="text-white font-medium">$1,000</span>
            </p>
            <button className="mt-4 px-4 py-2 flex items-center gap-2 rounded-full bg-white text-black font-medium hover:bg-white transition">
              Book a Call <span className="text-lg">→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
