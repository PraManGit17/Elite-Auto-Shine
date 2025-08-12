import React from "react";
import { useGLTF } from "@react-three/drei";

export default function HomeCarModel({ rotationY = 0, positionX = 0, scale = 1 }) {
  const { scene } = useGLTF("/models/2010_bmw_m3_e92.glb");
  
  return (
    <primitive
      object={scene}
      rotation={[0, rotationY, 0]}
      position={[positionX, -0.5, 0]}
      scale={[scale, scale, scale]}
    />
  );
}
