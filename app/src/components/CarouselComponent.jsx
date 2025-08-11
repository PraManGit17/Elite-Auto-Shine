"use client";

import Image from "next/image";
import React, { useState } from "react";


export default function CarouselComponent({ slides }) {
  const [active, setActive] = useState(2);
  const GAP = 200;

  return (
    <div className="w-full min-h-[320px] flex items-center justify-center p-6">
      <div className="relative w-full max-w-4xl h-72">
        {slides.map((slide, i) => {
          const offset = i - active;
          return (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="absolute top-25 left-1/2 -translate-x-1/2 -translate-y-1/2 focus:outline-none"
              style={{ zIndex: 50 - Math.abs(offset) }}
            >
              <div
                className="w-[350px] h-[400px] rounded-2xl border backdrop-blur-md bg-white/10 border-white/20 shadow-2xl flex flex-col items-center justify-center transform transition-all duration-400 cursor-pointer ease-out"
                style={{
                  transform: `translateX(${offset * GAP}px) scale(${i === active ? 1 : 0.82})`,
                  opacity: Math.max(0.35, 1 - Math.abs(offset) * 0.15),
                }}
              >
                
                <div className="w-full px-5 absolute top-5 flex items-start justify-between">
                  <div className="flex flex-col items-start">
                    <div className="text-xl font-semibold">{slide.model}</div>
                    <div className="italic text-sm font-normal">{slide.tagline}</div>
                  </div>
                  <div className="text-xl font-medium">{slide.year}</div>
                </div>


                {slide.component}

                <div className="w-full px-8 flex items-center justify-between absolute bottom-5">
                  <div className="flex flex-col items-center justify-center gap-2">
                    <Image src='/logo/engine.png' alt='Engine' width={45} height={45} />
                    <div className="font-medium">{slide.engine}</div>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-2">
                    <Image src='/logo/speed.png' alt='Top Speed' width={45} height={45} />
                    <div>{slide.topSpeed}</div>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-2">
                    <Image src='/logo/torque.png' alt='Torque' width={45} height={45} />
                    <div>{slide.torque}</div>
                  </div>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
