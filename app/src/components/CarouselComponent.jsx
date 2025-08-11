"use client";

import React, { useState } from "react";

export default function CarouselComponent({ slides }) {
  const [active, setActive] = useState(2);
  const GAP = 200;

  return (
    <div className="w-full min-h-[320px] flex items-center justify-center p-6">
      <div className="relative w-full max-w-4xl h-72">
        {slides.map((slideContent, i) => {
          const offset = i - active;
          return (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="absolute top-25 left-1/2 -translate-x-1/2 -translate-y-1/2 focus:outline-none"
              style={{ zIndex: 50 - Math.abs(offset) }}
            >
              <div
                className="w-[350px] h-[400px] rounded-2xl border backdrop-blur-md bg-white/10 border-white/20 shadow-2xl flex flex-col items-center 
                justify-center transform transition-all duration-400 cursor-pointer ease-out"
                style={{
                  transform: `translateX(${offset * GAP}px) scale(${
                    i === active ? 1 : 0.82
                  })`,
                  opacity: Math.max(0.35, 1 - Math.abs(offset) * 0.15),
                }}
              >
                {slideContent}
                {i === active && (
                  <div className="pointer-events-none absolute rounded-2xl" />
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
