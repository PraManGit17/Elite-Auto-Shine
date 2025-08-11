import React from 'react';
import { Canvas } from "@react-three/fiber";
import { Stars } from '@react-three/drei';

const Background = () => {
  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      zIndex: -1,
    }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        frameloop="demand" 
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[2, 2, 2]} />

        <Stars
          radius={80}
          depth={40}
          count={4500} 
          factor={3}
          saturation={0}
          fade
        />

        <mesh>
          <meshStandardMaterial color='#ff007f' wireframe />
        </mesh>
      </Canvas>
    </div>
  );
};

export default Background;
