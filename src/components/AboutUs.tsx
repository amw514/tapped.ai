import React from "react";

const AboutUs = () => {
  return (
    <div className="h-[30rem] md:h-[40rem]  w-full rounded-md bg-neutral-950 relative overflow-hidden flex flex-col items-center justify-center antialiased">
      <div className="max-w-7xl mx-auto p-4">
        <h2 className="relative z-10 text-md mb-6 md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          About Tapped AI
        </h2>
        <p className="text-neutral-400 max-w-xl mx-auto my-4 text-sm text-center relative z-10">
          We turn dreams of global performance into reality. as the premier live
          music data company, we specialize in crafting unforgettable world
          tours for performers of any scale.
          <br />
          <br />
          Harnessing the power of data and custom machine learning models, we
          provide unparalleled insights and guidance in the dynamic live music
          industry.
          <br />
          <br />
          Our mission is simple: to empower artists with the tools and knowledge
          they need to thrive on the world stage. whether you're a budding
          talent or a seasoned superstar, our innovative approach ensures that
          every aspect of your tour is optimized for success.
        </p>
        <h2 className="relative z-10 text-md mb-6 md:text-7xl pt-10  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Our Approach
        </h2>
        <p className="text-neutral-400 max-w-xl mx-auto my-4 text-sm text-center relative z-10">
          At tapped, we understand that no two artists are alike. that's why our
          solutions are as unique as the performers we serve. our dedicated team
          of experts works closely with each client to understand their vision,
          preferences, and goals, crafting a personalized tour strategy that
          exceeds expectations.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
