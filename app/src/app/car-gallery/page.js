"use client"

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Background from '@/components/Background';
import Carousel from '@/components/CarouselComponent';
import CarModel from '@/components/CarModelComponent';

const Page = () => {
  const welcomeRef = useRef(null);
  const eliteRef = useRef(null);
  const galleryRef = useRef(null);
  const animatedContainerRef = useRef(null);
  const gallerySectionRef = useRef(null);

  // useEffect(() => {
  //   const tl = gsap.timeline();

  //   tl.fromTo(
  //     welcomeRef.current,
  //     { opacity: 0, y: 50, clipPath: 'inset(0 100% 0 0)' },
  //     { opacity: 1, y: 0, clipPath: 'inset(0 0% 0 0)', duration: 1, ease: 'power2.out' }
  //   )
  //     .to(welcomeRef.current, { opacity: 0, duration: 0.5, delay: 0.5 })

  //     .fromTo(
  //       eliteRef.current,
  //       { opacity: 0, y: 50, clipPath: 'inset(0 100% 0 0)' },
  //       { opacity: 1, y: 0, clipPath: 'inset(0 0% 0 0)', duration: 1, ease: 'power2.out' }
  //     )

  //     .fromTo(
  //       galleryRef.current,
  //       { opacity: 0, y: 50, clipPath: 'inset(0 0 0 100%)' },
  //       { opacity: 1, y: 0, clipPath: 'inset(0 0 0 0%)', duration: 1, ease: 'power2.out' },
  //       '-=0.5'
  //     )

  //     .to(eliteRef.current, { opacity: 0, duration: 0.5, delay: 0.2 })
  //     .to(galleryRef.current, { opacity: 0, duration: 0.5, delay: 0.5 })


  //     .call(() => {

  //       animatedContainerRef.current.style.zIndex = '0';
  //       gallerySectionRef.current.style.zIndex = '1';
  //       gallerySectionRef.current.style.opacity='1'
  //     });
  // }, []);


  const Jaguarslides = [
    <CarModel src="/models/jaguars/jaguar2013.glb" maxSize={2} />,
    <CarModel src="/models/jaguars/jaguar2017.glb" maxSize={2} />,
    <CarModel src="/models/jaguars/jaguar1992.glb" maxSize={2} />,
    <CarModel src="/models/jaguars/jaguar1963.glb" maxSize={2} />,
    <CarModel src="/models/jaguars/jaguar2000.glb" maxSize={2} />
  ];

  return (
    <div className="h-[89vh] relative overflow-hidden">
      <Background />

      {/* 
      <div
        ref={animatedContainerRef}
        className="w-full h-full flex flex-col items-center justify-center absolute inset-0 z-[2] bg-transparent"
      >
        <div
          ref={welcomeRef}
          className="text-5xl font-medium  text-white"
        >
          Welcome To An Exotic Collection of Cars Brands
        </div>

        <div className="flex items-center text-4xl gap-2 overflow-hidden text-gray-200">
          <div ref={eliteRef} className="overflow-hidden">
            Elite Auto Shine
          </div>
          <div ref={galleryRef} className="overflow-hidden">
            Car Gallery
          </div>
        </div>
      </div> */}


      <div
        ref={gallerySectionRef}
        className="w-full h-full flex flex-col absolute inset-0 z-[1] text-white py-5 px-10 "
      >
        <div className="w-full h-full flex flex-col items-center justify-center gap-20">

          <div className="flex items-baseline gap-2 px-20 text-2xl md:text-4xl font-bold text-white tracking-wide">
            <span className="text-4xl md:text-5xl  drop-shadow-[0_0_15px_rgba(255,255,255,0.9)]">
              Jaguar
            </span>
            <span>-</span>
            <span>
              "Unleash the <span className="drop-shadow-[0_0_8px_rgba(255,255,255,1)] opacity-60">Art</span> of Performance"
            </span>
          </div>



          <div className="h-full w-full flex items-center justify-center">
            <Carousel slides={Jaguarslides} />
          </div>
        </div>


      </div>
    </div>
  );
};

export default Page;
