"use client";
import React from "react";
import GettingStartButton from "./GettingStartButton";
import Meteors from "./magicui/meteors";
import { Spotlight } from "./ui/Spotlight";

const HeroSection = () => {
  return (
    <div className="h-[30rem] md:h-[40rem] w-full rounded-md bg-neutral-950 relative overflow-hidden flex flex-col items-center justify-center antialiased">
     <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
     <Spotlight
        className="top-40 left-0 md:left-60 md:top-20"
        fill="white"
      />
    
      <div className="max-w-4xl mx-auto p-4">
        <h1 className="relative pb-3 z-10 text-4xl md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-100  text-center font-sans font-bold">
          create a world tour from your phone
        </h1>
        <p></p>
        <p className="text-neutral-400 max-w-lg mx-auto my-4 text-sm text-center relative z-10">
          unlock performance opportunities worldwide with cutting-edge music
          data analytics. seamlessly discover gigs, optimize tour schedules, and
          elevate your live music career, all from the convenience of your
          phone.
        </p>
      </div>
      <GettingStartButton />
      {/* <Meteors number={20} /> */}
    </div>
  );
};

export default HeroSection;
