import React from "react";
import VideoDialogue from "./VideoDialogue";

const Spotlight = () => {
  return (
    <div className="h-[40rem] md:h-[70rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden my-6">
      <div className=" p-4 max-w-7xl   mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl mb-8 md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-100 bg-opacity-50">
        reach 50,000+ venues with detailed analytics
        </h1>
        <VideoDialogue/>
      </div>
    </div>
  );
};

export default Spotlight;
