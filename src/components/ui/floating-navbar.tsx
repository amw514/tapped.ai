"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import GettingStartButton from "../GettingStartButton";
import Image from "next/image";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "flex  w-full sm:w-9/12  fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-lg bg-[#1B1B1B] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-80 z-[5000] px-4  py-2  items-center justify-between space-x-4",
        className
      )}
    >
      <div className="block">
        <Link href="/">
          <Image src="/tappedxx.svg" alt="logo" width={120} height={60} />
        </Link>
      </div>
      <div className="flex space-x-4 md:space-x-8 ">
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
            )}
          >
            <span className="text-sm md:text-lg">{navItem.name}</span>
          </Link>
        ))}
      </div>
      <div className="hidden sm:block">
        <GettingStartButton />
      </div>
    </div>
  );
};
