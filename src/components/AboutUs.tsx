import React from "react";
import AboutTeam from "./AboutTeam";

const AboutUs = () => {
  return (
    <div className="w-full rounded-md bg-neutral-950 relative overflow-hidden flex flex-col items-center justify-center antialiased">
      <div className="max-w-7xl mx-auto pt-12">
        <h2 className="relative z-10 text-2xl mb-6 md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          about tapped ai
        </h2>
        <p className="text-neutral-400 max-w-xl mx-auto my-4 text-sm text-center relative z-10 p-4">
          we turn dreams of global performance into reality. as the premier live
          music data company, we specialize in crafting unforgettable world
          tours for performers of any scale.
          <br />
          <br />
          harnessing the power of data and custom machine learning models, we
          provide unparalleled insights and guidance in the dynamic live music
          industry.
          <br />
          <br />
          our mission is simple: to empower artists with the tools and knowledge
          they need to thrive on the world stage. whether you&apos;re a budding
          talent or a seasoned superstar, our innovative approach ensures that
          every aspect of your tour is optimized for success.
        </p>
        <h2 className="relative z-10 text-2xl mb-6 md:text-7xl pt-10  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          our approach
        </h2>
        <p className="text-neutral-400 max-w-xl mx-auto my-4 text-sm text-center relative z-10 p-4">
          at tapped, we understand that no two artists are alike. that&apos;s why our
          solutions are as unique as the performers we serve. our dedicated team
          of experts works closely with each client to understand their vision,
          preferences, and goals, crafting a personalized tour strategy that
          exceeds expectations.
        </p>
      </div>
      <h2 className="py-10 relative z-10 text-md mb-6 md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          founders
        </h2>
      <AboutTeam/>
    </div>
  );
};

export default AboutUs;
