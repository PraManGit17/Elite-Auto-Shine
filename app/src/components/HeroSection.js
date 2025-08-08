"use client"

import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import { Orbit } from 'next/font/google';

const JaguarModel = () => {

  const { scene } = useGLTF("/models/jaguar2.glb");
  return <primitive object={scene} scale={0.8} position={[0, -1, 0]}/>

}


const HeroSection = () => {
  return (
    <div className='px-10'>
      <div className='border-white border-2 h-[80vh] flex flex-col items-center justify-end pb-10'>
      
        <Canvas camera={{
          position: [0, 1, 5],
          fov: 50
        }} shadows>
          <ambientLight intensity={15} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <JaguarModel />
          <OrbitControls enableZoom={true} />
        </Canvas>
      </div>
    </div>
  )
}

useGLTF.preload("/models/jaguar.glb");
export default HeroSection
