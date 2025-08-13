"use client"

import Background from '@/components/Background'
import Image from 'next/image'
import React, { Suspense, useState, useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import { useRouter } from 'next/navigation'
import gsap from 'gsap'

const carModels = [
  { id: 1, src: "/models/car.glb" },
  { id: 2, src: "/models/car2.glb" },
  { id: 3, src: "/models/car4.glb" }
]

function CarModel({ src }) {
  const { scene } = useGLTF(src)
  return <primitive object={scene} scale={100} />
}

const Page = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const headingRef = useRef(null)
  const brandInfoRef = useRef(null)
  const logosRef = useRef(null)
  const navRef = useRef(null)
  const sloganRef = useRef(null)
  const modelContainerRef = useRef(null)

  useEffect(() => {
    
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

    tl.fromTo(headingRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1 }
    )
      .fromTo(brandInfoRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1 },
        "+=0.3"
      )
      .fromTo(logosRef.current,
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 1 },
        "-=0.5"
      )
      .fromTo(navRef.current,
        { opacity: 0, x: 30 },
        { opacity: 1, x: 0, duration: 1 },
        "-=0.5"
      )
      .fromTo(sloganRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1 },
        "-=0.3"
      )
      .fromTo(modelContainerRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1 },
        "-=0.5"
      )
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      gsap.to(modelContainerRef.current, {
        opacity: 0,
        duration: 0.8,
        onComplete: () => {
          setCurrentIndex(prev => (prev + 1) % carModels.length)
          gsap.to(modelContainerRef.current, { opacity: 1, duration: 0.8 })
        }
      })
    }, 9000)

    return () => clearInterval(interval)
  }, [])

  const router = useRouter()

  return (
    <div className='w-full h-[89vh] relative overflow-hidden'>
      <Background />

      <div
        ref={headingRef}
        className='text-5xl font-medium absolute top-8 text-center w-full z-20'
      >
        Drive Brilliance Forward!
      </div>

      <div
        ref={brandInfoRef}
        className='flex flex-col items-start gap-2 absolute top-70 right-10 px-2 max-w-[30%] z-20'
      >
        <div className='italic text-4xl font-medium'>Elite Auto Shine</div>
        <div className='text-2xl font-normal'>
          Elevate your driving experience with Elite Auto Shine, where precision
          detailing meets showroom perfection for unmatched style and protection.
        </div>
      </div>

      <div
        ref={logosRef}
        className='text-lg font-normal absolute left-30 top-20 px-2 py-4 max-w-2s flex flex-col items-center gap-2 z-20'
      >
        <Image src="/images/mercedes.png" alt="Mercedes Logo" width={120} height={120} priority />
        <Image src="/images/jaguar.png" alt="Jaguar Logo" width={130} height={130} priority className='rotate-10' />
        <Image src="/images/bmw.png" alt="BMW Logo" width={100} height={100} priority />
        <Image src="/images/landrover.png" alt="Land Rover Logo" width={140} height={140} priority />
      </div>

      <div
        ref={navRef}
        className='text-xl font-medium absolute bottom-25 right-5 px-10 py-5 bg-white/20 rounded-2xl flex items-center justify-center gap-20 z-20'
      >
        <div
          onClick={() => router.push('/car-gallery')}
          className="cursor-pointer transition-all duration-300 hover:scale-110 hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,225,225,0.6)]"
        >
          ShowRoom
        </div>
        <div
          onClick={() => router.push('/services')}
          className="cursor-pointer transition-all duration-300 hover:scale-110 hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,225,225,0.6)]"
        >
          Services
        </div>
        <div
          onClick={() => router.push('/contact')}
          className="cursor-pointer transition-all duration-300 hover:scale-110 hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,225,225,0.6)]"
        >
          Contact
        </div>
      </div>

      <div
        ref={sloganRef}
        className='text-4xl font-medium absolute left-30 bottom-6 px-2 py-4 max-w-2s gap-2 z-20'
      >
        Luxurious Brands, Variety of Choices!!
      </div>

      <div
        ref={modelContainerRef}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <Canvas camera={{ position: [0, 2, 4], fov: 60 }}>
          <ambientLight intensity={0.8} />
          <directionalLight position={[25, 25, 25]} />
          <Suspense fallback={null}>
            <CarModel src={carModels[currentIndex].src} />
          </Suspense>
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={3} />
        </Canvas>
      </div>
    </div>
  )
}

export default Page
