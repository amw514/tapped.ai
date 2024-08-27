import React from "react";
import HeroVideoDialog from "./magicui/hero-video-dialog";

const NetworkingVideoSection = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl mb-8 md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
        tapped mixer
      </h1>
      <p className="text-neutral-400 max-w-lg mx-auto my-4 text-lg text-center relative z-10">
        a networking event to bring together a room of music, tech, and
        investors to connect and elevate their careers.
      </p>
      <div className="flex flex-col md:flex-row gap-4 relative rounded-2xl p-1 overflow-hidden my-6">
        <HeroVideoDialog
          animationStyle="top-in-bottom-out"
          videoSrc="https://www.youtube.com/embed/iWDIax023zQ"
          thumbnailSrc="/networking-vid-1.png"
          thumbnailAlt="Video thumbnail"
        />
        <HeroVideoDialog
          animationStyle="top-in-bottom-out"
          videoSrc="https://www.youtube.com/embed/_-1DJouW9Bs"
          thumbnailSrc="/networking-vid-2.png"
          thumbnailAlt="Video thumbnail"
        />
      </div>
      <div className="max-w-2xl mx-auto gap-4 relative rounded-2xl p-1 overflow-hidden my-6">
        <HeroVideoDialog
          animationStyle="top-in-bottom-out"
          videoSrc="https://www.youtube.com/embed/LWieY6ON4kA"
          thumbnailSrc="/networking-vid-3.png"
          thumbnailAlt="Video thumbnail"
        />
      </div>
    </div>
  );
};

export default NetworkingVideoSection;
