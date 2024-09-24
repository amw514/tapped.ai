"use client";
import React from "react";
import GettingStartButton from "./GettingStartButton";
import { AuroraBackground } from "./ui/aurora-background";
import { motion } from "framer-motion";
import { Cover } from "./ui/cover";

export function HeroSection() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="h-[30rem] md:h-[40rem] w-full rounded-md relative overflow-hidden flex flex-col items-center justify-center antialiased">
          <div className="max-w-4xl mx-auto p-4">
            <h1 className="relative pb-3 z-10 text-4xl md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-100  text-center font-sans font-bold">
              create a <Cover> world tour</Cover> from your phone
            </h1>
            <p></p>
            <p className="text-neutral-400 max-w-lg mx-auto my-4 text-sm text-center relative z-10">
              unlock performance opportunities worldwide with cutting-edge music
              data analytics. seamlessly discover gigs, optimize tour schedules,
              and elevate your live music career, all from the convenience of
              your phone.
            </p>
          </div>
          <GettingStartButton />
        </div>
      </motion.div>
    </AuroraBackground>
  );
}
