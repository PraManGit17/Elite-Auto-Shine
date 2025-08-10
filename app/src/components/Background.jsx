import React from 'react';
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from '@react-three/drei';

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
      <Canvas>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />

        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 2]} />

        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
        />

        <mesh position={[0, 0, 0]}>
          
          <meshStandardMaterial color='#ff007f' wireframe />
        </mesh>
      </Canvas>
    </div>
  );
};

export default Background;


// "use client";
// import React from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Environment, ContactShadows } from "@react-three/drei";
// import * as THREE from "three";
// import { useLoader } from "@react-three/fiber";

// const ShowroomFloor = () => {
//   const floorMap = useLoader(THREE.TextureLoader, "/textures/floor/diffuse.jpg");
//   const normalMap = useLoader(THREE.TextureLoader, "/textures/floor/normal.jpg");
//   const roughnessMap = useLoader(THREE.TextureLoader, "/textures/floor/roughness.jpg");

//   floorMap.wrapS = floorMap.wrapT = THREE.RepeatWrapping;
//   normalMap.wrapS = normalMap.wrapT = THREE.RepeatWrapping;
//   roughnessMap.wrapS = roughnessMap.wrapT = THREE.RepeatWrapping;

//   floorMap.repeat.set(4, 4);
//   normalMap.repeat.set(4, 4);
//   roughnessMap.repeat.set(4, 4);

//   return (
//     <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
//       <planeGeometry args={[50, 50]} />
//       <meshStandardMaterial
//         map={floorMap}
//         normalMap={normalMap}
//         roughnessMap={roughnessMap}
//         roughness={0.5}
//       />
//     </mesh>
//   );
// };

// const Background = () => {
//   return (
//     <div
//       style={{
//         position: "fixed",
//         top: 0,
//         left: 0,
//         width: "100%",
//         height: "100%",
//         zIndex: -1,
//       }}
//     >
//       <Canvas shadows camera={{ position: [0, 2, 8], fov: 50 }}>
//         {/* Controls */}
//         <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />

//         {/* Lights */}
//         <ambientLight intensity={0.3} />
//         <spotLight
//           position={[5, 8, 5]}
//           angle={0.3}
//           intensity={2}
//           penumbra={0.5}
//           castShadow
//           shadow-mapSize={[2048, 2048]}
//         />
//         <spotLight
//           position={[-5, 8, -5]}
//           angle={0.3}
//           intensity={1.5}
//           penumbra={0.5}
//           castShadow
//           shadow-mapSize={[2048, 2048]}
//         />

//         {/* Showroom Floor */}
//         <ShowroomFloor />

//         {/* Soft Shadows */}
//         <ContactShadows
//           position={[0, -0.01, 0]}
//           opacity={0.5}
//           scale={15}
//           blur={2.5}
//           far={4}
//         />

//         {/* Environment HDRI */}
//         <Environment files="/hdrs/showroom.hdr" background />
//       </Canvas>
//     </div>
//   );
// };

// export default Background;

