import React from "react";
import HeroVideoDialog from "./magicui/hero-video-dialog";

const PressSection = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl mb-8 md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
        Recent Press
      </h1>
      <p className="text-neutral-400 max-w-lg mx-auto my-4 text-lg text-center relative z-10">
        Find out how Ilias and Johannes tricked the music industry to end up
        meeting the three biggest multi billion dollar corporations in the
        space.
      </p>
      <div className="flex flex-col md:flex-row relative rounded-2xl p-1 overflow-hidden my-6">
        <HeroVideoDialog
          animationStyle="top-in-bottom-out"
          videoSrc="https://www.youtube.com/embed/ZMvSbU8rTOM"
          thumbnailSrc="/press-img-1.png"
          thumbnailAlt="Video thumbnail"
        />
        <HeroVideoDialog
          animationStyle="top-in-bottom-out"
          videoSrc="https://www.youtube.com/embed/4WlKirPSuGc"
          thumbnailSrc="/press-img-2.png"
          thumbnailAlt="Video thumbnail"
        />
        <HeroVideoDialog
          animationStyle="top-in-bottom-out"
          videoSrc="https://www.onthesceneny.com/uncategorized/april-fools-prank-turns-into-genius-marketing-by-these-two-entrepreneurs/"
          thumbnailSrc="/press-article.png"
          thumbnailAlt="Video thumbnail"
        />
      </div>
    </div>
  );
};

export default PressSection;
