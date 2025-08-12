"use client";

import React, { useState, memo } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import modelsData from "../data/modelsData.json";
import Background from "./Background";
import Image from "next/image";

const CarModel = memo(({ file }) => {
  const { scene } = useGLTF(file);
  return <primitive object={scene} scale={3} position={[0, -1, 0]} />;
});
CarModel.displayName = "CarModel";


useGLTF.preload("/models/bmw/bmwm8.glb");

const FeatureCard = memo(({ img, title, description }) => (
  <div className="w-[30%] flex items-start gap-3">
    <Image src={img} alt={title} width={60} height={60} />
    <div className="flex flex-col items-start">
      <div className="text-3xl font-medium">{title}</div>
      <div className="text-md font-normal text-gray-200 opacity-75">
        {description}
      </div>
    </div>
  </div>
));
FeatureCard.displayName = "FeatureCard";

const HeroSection = () => {
  const [currentIndex] = useState(0);

  return (
    <div className="px-10">
      <Background />

      {/* Car and Brand Section */}
      <div className="relative h-[70vh]">
        <Canvas camera={{ position: [2.5, 1.5, 3], fov: 40 }} shadows>
          <ambientLight intensity={0.4} />
          <directionalLight position={[5, 10, 5]} intensity={1.2} />
          <CarModel file="/models/bmw/bmwm8.glb" />
          <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>

        <div className="flex items-center gap-2 absolute top-15 left-24 z-10 text-white select-none">
          <Image
            src="/logo/bmwlogo.jpg"
            alt="BMW Logo"
            width={150}
            height={150}
            priority
          />
          <div>
            <h1 className="text-7xl font-bold leading-tight">BMW</h1>
            <p className="text-3xl font-light opacity-80">Series 3</p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="px-10 flex items-center justify-center text-white">
        <div className="flex justify-between text-md w-full max-w-6xl">
          <FeatureCard
            img="/logo/luxury.png"
            title="Luxury"
            description="Premium interiors with advanced comfort, high-quality materials, and cutting-edge tech."
          />
          <FeatureCard
            img="/logo/performance.png"
            title="Performance"
            description="Powerful engines and precise handling for an exhilarating drive."
          />
          <FeatureCard
            img="/logo/Steering.png"
            title="Rear-Wheel Drive"
            description="Sporty dynamics and balanced control for an engaging driving experience."
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
