import Image from "next/image";
import Link from "next/link";
import React from "react";

const Channel = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 ">
            Uniting Music, Tech, and Investment Pioneers
          </h2>
          <p className="text-lg text-muted-foreground">
            Join us at Tapped Mixer, a unique networking event and founders
            panel that brings together leaders from music, technology, and
            investment. Watch the full event and highlights on our YouTube
            channel.
          </p>
          <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-800 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              <Link href="https://www.youtube.com/@TappedAi_">
                Go to our channel
              </Link>
            </span>
          </button>
        </div>
        <div className="hidden md:block md:w-1/2 mt-8 md:mt-0">
          <Image
            src="/Comp.png"
            alt="computer music"
            width={500}
            height={500}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Channel;
