import React from 'react'
import HeroVideoDialog from './magicui/hero-video-dialog'

const VideoDialogue = () => {
  return (
    <section className="max-w-5xl mx-auto  flex flex-col justify-center items-center px-7 lg:px-0 relative">
    <div className="relative rounded-2xl p-1 overflow-hidden">
      <HeroVideoDialog
        animationStyle="top-in-bottom-out"
        videoSrc="https://www.youtube.com/embed/DPiogp-D4ig"
        thumbnailSrc="/tapped.ai-img.png"
        thumbnailAlt="Video thumbnail"
      />
    </div>
  </section>
  )
}

export default VideoDialogue