"use client";

import React, { useEffect, useRef, useState, Suspense } from "react";
import dynamic from "next/dynamic";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Background from "@/components/Background";

gsap.registerPlugin(ScrollTrigger);

const Carousel = dynamic(() => import("@/components/CarouselComponent"), {
  ssr: false,
});
const CarModel = dynamic(() => import("@/components/CarModelComponent"), {
  ssr: false,
});

const Page = () => {
  const welcomeRef = useRef(null);
  const eliteRef = useRef(null);
  const galleryRef = useRef(null);
  const animatedContainerRef = useRef(null);
  const gallerySectionRef = useRef(null);
  const bmwSectionRef = useRef(null);
  const jaguarSectionRef = useRef(null);
  const mercedesSectionRef = useRef(null);

  // New refs for tagline and carousel container animation
  const jaguarTaglineRef = useRef(null);
  const jaguarCarouselRef = useRef(null);

  const bmwTaglineRef = useRef(null);
  const bmwCarouselRef = useRef(null);

  const mercedesTaglineRef = useRef(null);
  const mercedesCarouselRef = useRef(null);

  const [jaguarSlides, setJaguarSlides] = useState([]);
  const [bmwSlides, setBmwSlides] = useState([]);
  const [mercedesSlides, setMercedesSlides] = useState([]);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      welcomeRef.current,
      { opacity: 0, y: 50, clipPath: "inset(0 100% 0 0)" },
      {
        opacity: 1,
        y: 0,
        clipPath: "inset(0 0% 0 0)",
        duration: 1,
        ease: "power2.out",
      }
    )
      .to(welcomeRef.current, { opacity: 0, duration: 0.5, delay: 0.5 })

      .fromTo(
        eliteRef.current,
        { opacity: 0, y: 50, clipPath: "inset(0 100% 0 0)" },
        {
          opacity: 1,
          y: 0,
          clipPath: "inset(0 0% 0 0)",
          duration: 1,
          ease: "power2.out",
        }
      )

      .fromTo(
        galleryRef.current,
        { opacity: 0, y: 50, clipPath: "inset(0 0 0 100%)" },
        {
          opacity: 1,
          y: 0,
          clipPath: "inset(0 0 0 0%)",
          duration: 1,
          ease: "power2.out",
        },
        "-=0.5"
      )

      .to([eliteRef.current, galleryRef.current], {
        opacity: 0,
        duration: 0.5,
        stagger: 0.2,
      })

      .fromTo(
        gallerySectionRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          onComplete: () => {
            setJaguarSlides([
              {
                component: (
                  <Suspense fallback={<div className="text-white">Loading...</div>}>
                    <CarModel src="/models/jaguars/jaguar2013.glb" maxSize={2} />
                  </Suspense>
                ),
                model: "Jaguar F-Type",
                year: "2013",
                tagline: "Luxury Sports Coupe",
                engine: "5.0 V8",
                topSpeed: "320 km/h",
                torque: "650 Nm",
              },
              {
                component: (
                  <Suspense fallback={<div className="text-white">Loading...</div>}>
                    <CarModel src="/models/jaguars/jaguar2017.glb" maxSize={2} />
                  </Suspense>
                ),
                model: "Jaguar XE",
                year: "2017",
                tagline: "Performance Sedan",
                engine: "2.0 I4 ",
                topSpeed: "250 km/h",
                torque: "365 Nm",
              },
              {
                component: (
                  <Suspense fallback={<div className="text-white">Loading...</div>}>
                    <CarModel src="/models/jaguars/jaguar1992.glb" maxSize={2} />
                  </Suspense>
                ),
                model: "Jaguar XJ220",
                year: "1992",
                tagline: "Legendary Supercar",
                engine: "3.5 V6 ",
                topSpeed: "341 km/h",
                torque: "642 Nm",
              },
              {
                component: (
                  <Suspense fallback={<div className="text-white">Loading...</div>}>
                    <CarModel src="/models/jaguars/jaguar1963.glb" maxSize={2} />
                  </Suspense>
                ),
                model: "Jaguar E-Type",
                year: "1963",
                tagline: "Classic Sports Icon",
                engine: "3.8 I6",
                topSpeed: "241 km/h",
                torque: "325 Nm",
              },
              {
                component: (
                  <Suspense fallback={<div className="text-white">Loading...</div>}>
                    <CarModel src="/models/jaguars/jaguar2000.glb" maxSize={2} />
                  </Suspense>
                ),
                model: "Jaguar S-Type",
                year: "2000",
                tagline: "Luxury Sedan",
                engine: "4.0 V8",
                topSpeed: "250 km/h",
                torque: "388 Nm",
              },
            ]);
          },
        }
      );

    // Jaguar section animation + ScrollTrigger for tagline & carousel
    gsap.fromTo(
      jaguarSectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: jaguarSectionRef.current,
          start: "top 60%",
          toggleActions: "play none none reverse",
          onEnter: () => {

            if (jaguarTaglineRef.current && jaguarCarouselRef.current) {
              gsap.fromTo(
                jaguarTaglineRef.current,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
              );
              gsap.fromTo(
                jaguarCarouselRef.current,
                { opacity: 0, scale: 0.95 },
                { opacity: 1, scale: 1, duration: 1, ease: "power2.out", delay: 0.3 }
              );
            }
          },
        },
      }
    );

    gsap.fromTo(
      bmwSectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: bmwSectionRef.current,
          start: "top 40%",
          end: "bottom 30%",
          toggleActions: "play none none reverse",
          onEnter: () => {
            setBmwSlides([
              {
                component: (
                  <Suspense fallback={<div className="text-white">Loading...</div>}>
                    <CarModel src="/models/bmw/bmwm5.glb" maxSize={2} />
                  </Suspense>
                ),
                model: "BMW M8",
                year: "2020",
                tagline: "High-Performance Luxury",
                engine: "4.4 V8",
                topSpeed: "305 km/h",
                torque: "750 Nm",
              },
              {
                component: (
                  <Suspense fallback={<div className="text-white">Loading...</div>}>
                    <CarModel src="/models/bmw/bmwm8.glb" maxSize={2} />
                  </Suspense>
                ),
                model: "BMW M5",
                year: "2018",
                tagline: "Executive Sports Sedan",
                engine: "4.4 V8",
                topSpeed: "305 km/h",
                torque: "750 Nm",
              },
              {
                component: (
                  <Suspense fallback={<div className="text-white">Loading...</div>}>
                    <CarModel src="/models/bmw/bmwm5F90.glb" maxSize={2} />
                  </Suspense>
                ),
                model: "BMW M5 F90",
                year: "2021",
                tagline: "Luxury Meets Performance",
                engine: "4.4L Twin-Turbo V8",
                topSpeed: "305 km/h",
                torque: "750 Nm",
              },
              {
                component: (
                  <Suspense fallback={<div className="text-white">Loading...</div>}>
                    <CarModel src="/models/bmw/bmw_i8.glb" maxSize={2} />
                  </Suspense>
                ),
                model: "BMW i8",
                year: "2020",
                tagline: "Future of Hybrid Sports Cars",
                engine: "1.5L Turbo I3 + Electric Motor",
                topSpeed: "250 km/h",
                torque: "570 Nm",
              },
              {
                component: (
                  <Suspense fallback={<div className="text-white">Loading...</div>}>
                    <CarModel src="/models/bmw/bmwm3E46.glb" maxSize={2} />
                  </Suspense>
                ),
                model: "BMW M3 E46",
                year: "2005",
                tagline: "Iconic Driving Machine",
                engine: "3.2 I6",
                topSpeed: "250 km/h",
                torque: "365 Nm",
              },
            ]);

            setTimeout(() => {
              if (bmwTaglineRef.current && bmwCarouselRef.current) {
                gsap.fromTo(
                  bmwTaglineRef.current,
                  { opacity: 0, y: 20 },
                  { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
                );
                gsap.fromTo(
                  bmwCarouselRef.current,
                  { opacity: 0, scale: 0.95 },
                  { opacity: 1, scale: 1, duration: 1, ease: "power2.out", delay: 0.3 }
                );
              }
            }, 50);
          },
        },
      }
    );

    gsap.fromTo(
      mercedesSectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: mercedesSectionRef.current,
          start: "top 40%",
          end: "bottom 30%",
          toggleActions: "play none none reverse",
          onEnter: () => {
            setMercedesSlides([
              {
                component: (
                  <Suspense fallback={<div className="text-white">Loading...</div>}>
                    <CarModel src="/models/mercedes/mercedesgt.glb" maxSize={2} />
                  </Suspense>
                ),
                model: "Mercedes-AMG GT R",
                year: "2020",
                tagline: "Born on the Racetrack",
                engine: "4.0L V8",
                topSpeed: "318 km/h",
                torque: "700 Nm",
              },
              {
                component: (
                  <Suspense fallback={<div className="text-white">Loading...</div>}>
                    <CarModel src="/models/mercedes/mercedesmaybach.glb" maxSize={2} />
                  </Suspense>
                ),
                model: "Mercedes-AMG G63",
                year: "2022",
                tagline: "Luxury Off-Road Powerhouse",
                engine: "4.0L V8",
                topSpeed: "220 km/h",
                torque: "850 Nm",
              },
              {
                component: (
                  <Suspense fallback={<div className="text-white">Loading...</div>}>
                    <CarModel src="/models/mercedes/mercedesS.glb" maxSize={2} />
                  </Suspense>
                ),
                model: "Mercedes-AMG S63",
                year: "2021",
                tagline: "Executive Muscle Sedan",
                engine: "4.0L V8",
                topSpeed: "250 km/h",
                torque: "900 Nm",
              },
              {
                component: (
                  <Suspense fallback={<div className="text-white">Loading...</div>}>
                    <CarModel src="/models/mercedes/mercedesS.glb" maxSize={2} />
                  </Suspense>
                ),
                model: "Mercedes-AMG ONE",
                year: "2023",
                tagline: "Formula 1 Technology for the Road",
                engine: "1.6L Turbo V6",
                topSpeed: "352 km/h",
                torque: "1500 Nm",
              },
              {
                component: (
                  <Suspense fallback={<div className="text-white">Loading...</div>}>
                    <CarModel src="/models/mercedes/mercedese63s.glb" maxSize={2} />
                  </Suspense>
                ),
                model: "Mercedes-AMG E63 S",
                year: "2021",
                tagline: "Supercar Disguised as a Sedan",
                engine: "4.0L V8",
                topSpeed: "300 km/h",
                torque: "850 Nm",
              },
            ]);

            setTimeout(() => {
              if (mercedesTaglineRef.current && mercedesCarouselRef.current) {
                gsap.fromTo(
                  mercedesTaglineRef.current,
                  { opacity: 0, y: 20 },
                  { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
                );
                gsap.fromTo(
                  mercedesCarouselRef.current,
                  { opacity: 0, scale: 0.95 },
                  { opacity: 1, scale: 1, duration: 1, ease: "power2.out", delay: 0.3 }
                );
              }
            }, 100);
          },
        },
      }
    );
  }, []);

  return (
    <div className="h-auto relative overflow-hidden">
      <Background />

      <div
        ref={animatedContainerRef}
        className="w-full h-screen flex flex-col items-center absolute top-50 inset-0 z-[2] bg-transparent"
      >
        <div ref={welcomeRef} className="text-5xl font-medium text-white">
          Welcome To An Exotic Collection of Cars Brands
        </div>

        <div className="flex items-center text-4xl gap-2 overflow-hidden text-gray-200">
          <div ref={eliteRef} className="overflow-hidden">
            Elite Auto Shine
          </div>
          <div ref={galleryRef} className="overflow-hidden">
            Car Gallery
          </div>
        </div>
      </div>

      <div ref={gallerySectionRef}>
        <div
          ref={jaguarSectionRef}
          className="w-full h-screen flex flex-col text-white py-5 px-10 opacity-1"
        >
          <div className="w-full h-full flex flex-col items-center justify-center gap-20">
            <div className="flex items-baseline gap-2 px-20 text-2xl md:text-4xl font-bold text-white tracking-wide cursor-pointer">
              <span
                className="text-4xl md:text-5xl drop-shadow-[0_0_15px_rgba(255,255,255,0.9)]"
              // Jaguar brand title - no animation needed here
              >
                Jaguar
              </span>
              <span>-</span>
              <span ref={jaguarTaglineRef}>
                "Unleash the{" "}
                <span className="drop-shadow-[0_0_8px_rgba(255,255,255,1)] opacity-60">
                  Art
                </span>{" "}
                of Performance"
              </span>
            </div>
            <div
              className="h-full w-full flex items-center justify-center"
              ref={jaguarCarouselRef}
            >
              {jaguarSlides.length > 0 && <Carousel slides={jaguarSlides} />}
            </div>
          </div>
        </div>

        <div
          ref={bmwSectionRef}
          className="w-full h-screen flex flex-col relative text-white py-5 px-10 opacity-0"
        >
          <div className="w-full h-full flex flex-col items-center justify-center gap-20">
            <div className="flex items-baseline gap-2 px-20 text-2xl md:text-4xl font-bold text-white tracking-wide cursor-pointer">
              <span
                className="text-4xl md:text-5xl drop-shadow-[0_0_15px_rgba(255,255,255,0.9)]"
              >
                BMW
              </span>
              <span>-</span>
              <span ref={bmwTaglineRef}>
                "Sheer{" "}
                <span className="drop-shadow-[0_0_8px_rgba(255,255,255,1)] opacity-60">
                  Driving
                </span>{" "}
                Pleasure"
              </span>
            </div>
            <div
              className="h-full w-full flex items-center justify-center"
              ref={bmwCarouselRef}
            >
              {bmwSlides.length > 0 && <Carousel slides={bmwSlides} />}
            </div>
          </div>
        </div>

        <div
          ref={mercedesSectionRef}
          className="w-full h-screen flex flex-col relative text-white py-5 px-10 opacity-0"
        >
          <div className="w-full h-full flex flex-col items-center justify-center gap-20">
            <div className="flex items-baseline gap-2 px-20 text-2xl md:text-4xl font-bold text-white tracking-wide cursor-pointer">
              <span
                className="text-4xl md:text-5xl drop-shadow-[0_0_15px_rgba(255,255,255,0.9)]"
              >
                Mercedes-Benz
              </span>
              <span>-</span>
              <span ref={mercedesTaglineRef}>
                "The{" "}
                <span className="drop-shadow-[0_0_8px_rgba(255,255,255,1)] opacity-60">
                  Best or Nothing
                </span>"
              </span>
            </div>
            <div
              className="h-full w-full flex items-center justify-center"
              ref={mercedesCarouselRef}
            >
              {mercedesSlides.length > 0 && <Carousel slides={mercedesSlides} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
