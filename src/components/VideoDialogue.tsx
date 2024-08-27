import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const VideoDialogue = () => {
  return (
    <section className="max-w-5xl mx-auto  flex flex-col justify-center items-center px-7 lg:px-0 relative">
    <div className="relative rounded-2xl p-1 overflow-hidden my-6">
      <Link href="https://app.tapped.ai/">
        <Image src="/tapped.ai-img.png" alt="tapped ai platform" width={1500} height={1500}/>
      </Link>
    </div>
  </section>
  )
}

export default VideoDialogue