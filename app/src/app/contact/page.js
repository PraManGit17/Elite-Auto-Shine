"use client";

import React, { useEffect, useRef } from "react";
import Background from "@/components/Background";
import { Chat } from "phosphor-react";
import { Mail, MapPin, Phone } from "lucide-react";
import { gsap } from "gsap";

const Page = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const cardsRef = useRef([]);
  cardsRef.current = [];

  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  useEffect(() => {
    const tl = gsap.timeline();

    // Title animation
    tl.from(titleRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.8,
      ease: "power3.out",
    })
      // Subtitle animation
      .from(
        subtitleRef.current,
        {
          opacity: 0,
          y: -15,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.4" // overlap slightly with title
      )
      // Cards animation
      .from(
        cardsRef.current,
        {
          opacity: 0,
          y: 50,
          stagger: 0.2,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.2"
      );

    // Hover animations
    cardsRef.current.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          scale: 1.05,
          boxShadow: "0px 0px 25px rgba(255,255,255,0.7)",
          duration: 0.3,
          ease: "power2.out",
        });
        card.style.cursor = "pointer";
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          scale: 1,
          boxShadow: "0px 0px 0px rgba(0,0,0,0)",
          duration: 0.3,
          ease: "power2.inOut",
        });
        card.style.cursor = "default";
      });
    });
  }, []);

  return (
    <div className="h-[72vh] flex justify-center mt-8 px-4">
      <Background />

      <div className="w-[85%] py-4 flex flex-col items-center gap-4">
        <div ref={titleRef} className="text-3xl font-medium">
          Contact Elite Auto Shine Customer Team
        </div>
        <div
          ref={subtitleRef}
          className="text-gray-200 font-normal opacity-60"
        >
          Reach Out To Us, Through Following Mediums We Would Surely Address
          Your Query!
        </div>

        <div className="w-full mt-10 flex items-center justify-center gap-8 p-5">
          <div
            ref={addToRefs}
            className="h-full px-5 py-10 w-[35%] border flex flex-col items-start rounded-2xl"
          >
            <Phone
              size={40}
              color="black"
              className="bg-white/70 rounded p-2"
            />
            <div className="mt-8 text-xl font-medium">Call To Sales Team</div>
            <div className="mt-2 text-sm font-normal text-gray-300 opacity-70">
              Speaky To Our Friendly Team, To Take Insight About What We Offer
            </div>
            <div className="text-sm mt-3 underline">
              +91-8373XXXX87 <br /> +91-98XXX898X9
            </div>
          </div>

          <div
            ref={addToRefs}
            className="h-full px-5 py-10 w-[35%] border flex flex-col items-start rounded-2xl"
          >
            <Chat size={40} color="black" className="bg-white/70 rounded p-2" />
            <div className="mt-8 text-xl font-medium">Chat To Support</div>
            <div className="mt-2 text-sm font-normal text-gray-300 opacity-70">
              Chat On Following Whatsapp Number For Any Help
            </div>
            <div className="text-sm mt-3 underline">+91-8373XXXX10</div>
          </div>

          <div
            ref={addToRefs}
            className="h-full px-5 py-10 w-[35%] border flex flex-col items-start rounded-2xl"
          >
            <MapPin
              size={40}
              color="black"
              className="bg-white/70 rounded p-2"
            />
            <div className="mt-8 text-xl font-medium">Visit Us</div>
            <div className="mt-2 text-sm font-normal text-gray-300 opacity-70">
              Click On Following Google Maps Link, To Visit Our HQ
            </div>
            <div className="text-sm mt-3 underline">View on Google Maps</div>
          </div>

          <div
            ref={addToRefs}
            className="h-full px-5 py-10 w-[35%] border flex flex-col items-start rounded-2xl"
          >
            <Mail size={40} color="black" className="bg-white/70 rounded p-2" />
            <div className="mt-8 text-2xl font-medium">Mail Us</div>
            <div className="mt-2 text-sm font-normal text-gray-300 opacity-70">
              Mail Us For Any Quotation, Our Team Will Get Back To You in 2-3
              Business Days
            </div>
            <div className="text-sm mt-3 underline">easmail@gmail.com</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
