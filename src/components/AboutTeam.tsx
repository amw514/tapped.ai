import React from "react";
import Founders from "./ui/contentCard";
import Investors from "./Investors";

const AboutTeam = () => {
  return (
    <div>
      <h2 className="py-10 relative z-10 text-md mb-6 md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-300  text-center font-sans font-bold">
        founders
      </h2>
      <Founders />
      <h2 className="py-10 relative z-10 text-md mb-6 md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-300  text-center font-sans font-bold">
        advisors
      </h2>
      <p className="text-center">
        our advisor network has been carefully crafted to be one degree away
        from everyone in the music and tech industry.
      </p>
      <Investors />
    </div>
  );
};

export default AboutTeam;
