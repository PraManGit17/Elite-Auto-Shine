"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const handleNavigate = (path) => {
    router.push(path);
  };

  return (
    <div className="p-2 w-full">
      <div className="flex items-center justify-between px-15 py-2 rounded-full">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleNavigate("/")}>
          <Image src="/logo.png" alt="Logo" width={45} height={45} />
          <div className="text-2xl font-semibold">Elite Shine Auto</div>
        </div>

        <div className="text-xl flex items-center text-gray-300 opacity-70 gap-10">
          {[
            { label: "Home", path: "/" },
            { label: "Car Gallery", path: "/car-gallery" },
            { label: "Services", path: "/services" },
          ].map(({ label, path }) => (
            <div
              key={label}
              onClick={() => handleNavigate(path)}
              className="relative hover:scale-110 hover:text-white hover:mb-1 hover:cursor-pointer transition-all 
                         hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.9)]"
            >
              {label}
            </div>
          ))}

  
        </div>
      </div>
    </div>
  );
};

export default Navbar;
