"use client";

import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Html } from "@react-three/drei";
import modelsData from '../data/modelsData.json';
import Background from "./Background";
import Image from "next/image";



const CarModel = ({ file }) => {

  const { scene } = useGLTF("/models/bmw3.glb");
  return <primitive object={scene} scale={1.1} position={[0, -0.5, -0.5]} />;
};


const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);



  return (
    <div className="px-10">
      <Background />

      <div className="relative h-[70vh]">
        <Canvas camera={{ position: [3, 2, 5], fov: 40 }} shadows>
          <ambientLight intensity={0.3} />
          <directionalLight position={[50, 80, 40]} intensity={1} />
          <CarModel />
          <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>

        <div className="flex items-center gap-2 absolute top-15 left-24 z-10 text-white select-none">

          <Image
            src='/logo/bmwlogo.jpg'
            alt='Logo'
            width={150}
            height={150}
          />
          <div>
            <h1 className="text-7xl font-bold leading-tight">BMW</h1>
            <p className="text-3xl font-light opacity-80">Series 3</p>
          </div>

        </div>


      </div>


      <div className="px-10 flex items-center justify-center text-white">

        <div className="flex justify-between text-md">
          <div className="w-[30%] flex items-start gap-3">
            <div>
              <Image
                src='/logo/luxury.png'
                alt='Logo'
                width={60}
                height={60}
              />
            </div>
            <div className="flex flex-col items-start ">
              <div className="text-3xl font-medium">Luxury</div>
              <div className="text-md font-normal text-gray-200 opacity-75">
                Premium interiors with advanced comfort, high-quality materials, and cutting-edge tech.
              </div>
            </div>
          </div>

          <div className="w-[30%] flex items-start gap-3">
            <div>
              <Image
                src='/logo/performance.png'
                alt='Logo'
                width={60}
                height={60}
              />
            </div>
            <div className="flex flex-col items-start">
              <div className="text-3xl font-medium">Performance</div>
              <div className="text-md font-normal text-gray-200 opacity-75">
                Powerful engines and precise handling for an exhilarating drive.
              </div>
            </div>
          </div>

          <div className="w-[30%] flex items-start gap-3">
            <div>
              <Image
                src='/logo/Steering.png'
                alt='Logo'
                width={60}
                height={60}
              />
            </div>
            <div className="flex flex-col items-start">
              <div className="text-3xl font-medium">Rear-Wheel Drive</div>
              <div className="text-md font-normal text-gray-200 opacity-75">
                Sporty dynamics and balanced control for an engaging driving experience.
              </div>
            </div>
          </div>

        </div>


      </div>
    </div>
  );
};

modelsData.forEach((m) => useGLTF.preload(m.file));

export default HeroSection;
