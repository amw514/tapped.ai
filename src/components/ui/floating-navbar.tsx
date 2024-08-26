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
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex  w-full sm:w-9/12   fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-lg bg-gray-700 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-80 z-[5000] pr-2 pl-8 py-2  items-center justify-between space-x-4",
          className
        )}
      >
        <div className="hidden sm:block">Tapped Ai</div>
        <div className="flex space-x-3">
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
        <div>
         <GettingStartButton/>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
