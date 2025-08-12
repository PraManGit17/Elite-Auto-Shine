"use client";

import React, { useRef, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import HomeCarModel from "@/components/HomeCarModel";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Background from "@/components/Background";

gsap.registerPlugin(ScrollTrigger);

export default function Page() {
  const [carProps, setCarProps] = useState({
    rotationY: Math.PI / 200,
    positionX: 0,
    scale: 155
  });

  const sectionsRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: {
          trigger: sectionsRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
          pin: false,
        }
      })
        .to(carProps, {
          rotationY: Math.PI / 4,
          positionX: 0.5,
          scale: 140,
          onUpdate: () => setCarProps({ ...carProps })
        })

        .to(carProps, {
          rotationY: Math.PI / 2,
          positionX: 1,
          scale: 140,
          onUpdate: () => setCarProps({ ...carProps })
        })

        .to(carProps, {
          rotationY: Math.PI,
          positionX: 1.5,
          scale: 140,
          onUpdate: () => setCarProps({ ...carProps })
        })
        .to(carProps, {
          rotationY: Math.PI * 1.5,
          positionX: 2,
          scale: 145,
          onUpdate: () => setCarProps({ ...carProps })
        });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div>
      <Background />
      <div className="z-50 fixed top-5 left-0 w-full h-full pointer-events-none">
        <Canvas camera={{ position: [0, 1, 5], fov: 100 }}>
          <ambientLight intensity={0.2} />
          <directionalLight position={[1, 25, 35]} />
          <HomeCarModel
            rotationY={carProps.rotationY}
            positionX={carProps.positionX}
            scale={carProps.scale}
          />
        </Canvas>
      </div>

      {/* Scroll Sections */}
      <div id="scroll-sections" ref={sectionsRef} >
        <section className="relative border-2 w-full h-[89vh]">
          <div className="absolute top-46 text-center border-2 w-full font-medium text-6xl">Explore A Collection of Vivid Four-Wheelers</div>
          <div className="absolute bottom-5 text-center border-2 w-full font-medium text-5xl">Elite Shine Auto Welcomes You</div>
        </section>
        <section className="h-screen flex items-center justify-center border-2">
          <h1 className="text-4xl text-white">Section 2</h1>
        </section>
        <section className="h-screen flex items-center justify-center border-2">
          <h1 className="text-4xl text-white">Section 3</h1>
        </section>
      </div>
    </div>
  );
}
