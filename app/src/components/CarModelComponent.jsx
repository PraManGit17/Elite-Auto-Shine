"use client";
import React, { Suspense, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";

const Car = ({ src, maxSize }) => {
  const [model, setModel] = useState(null);

  useEffect(() => {
    if (!src) return;
    new GLTFLoader().load(src, (gltf) => {
      const scene = gltf.scene;

      // Get original size
      const box = new THREE.Box3().setFromObject(scene);
      const size = new THREE.Vector3();
      box.getSize(size);

      // Scale model relative to maxSize
      const scaleFactor = maxSize / Math.max(size.x, size.y, size.z);
      scene.scale.set(scaleFactor, scaleFactor, scaleFactor);

      // Slightly lift model up
      scene.position.set(0, -0.2, 0);

      setModel(scene);
    });
  }, [src, maxSize]);

  // Rotate continuously
  useFrame(() => {
    if (model) model.rotation.y += 0.01;
  });

  return model ? <primitive object={model} /> : null;
};

const CarModel = ({ src, sizeMultiplier = 1 }) => {
  return (
    <Canvas
      style={{ width: "100%", height: "350px" }}
      camera={{
        position: [0, 0.5, 3 / sizeMultiplier], // move camera closer when bigger
        fov: 40
      }}
    >
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} />
      <Suspense fallback={null}>
        <Car src={src} maxSize={1.8 * sizeMultiplier} />
        <Environment preset="sunset" />
      </Suspense>
    </Canvas>
  );
};

export default CarModel;
