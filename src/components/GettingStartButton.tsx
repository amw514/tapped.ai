import Link from "next/link";
import React from "react";

const GettingStartButton = () => {
  return (
    <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[#4B4B4B] px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
        <Link href="https://app.tapped.ai/">book now</Link>
      </span>
    </button>
  );
};

export default GettingStartButton;
