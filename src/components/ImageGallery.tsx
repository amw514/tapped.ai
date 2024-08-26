import Image from 'next/image'
import React from 'react'

const ImageGallery = () => {
  return (
    <div className="container mx-auto mb-6 px-4 py-4">
        <Image
            src="/unsplash-img-3.jpg"
            alt="Gallery image 3"
            width={100}
            height={300}
            className="w-full h-full object-cover rounded-lg block sm:hidden"
          />
      <div className="hidden sm:grid grid-cols-6 grid-rows-6 gap-2 h-[600px]">
        <div className="row-span-3 col-start-1 row-start-2">
          <Image
            src="/unsplash-img-1.jpg"
            alt="Gallery image 1"
            width={100}
            height={300}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="row-span-3 col-start-2 row-start-1">
          <Image
            src="/unsplash-img-2.jpg"
            alt="Gallery image 2"
            width={100}
            height={300}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="col-span-2 row-span-6 col-start-3 row-start-1">
          <Image
            src="/unsplash-img-3.jpg"
            alt="Gallery image 3 (large center)"
            width={200}
            height={600}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="row-span-3 col-start-2 row-start-4">
          <Image
            src="/unsplash-img-4.jpg"
            alt="Gallery image 4"
            width={100}
            height={300}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="row-span-3 col-start-5 row-start-1">
          <Image
            src="/unsplash-img-5.jpg"
            alt="Gallery image 5"
            width={100}
            height={300}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="row-span-3 col-start-5 row-start-4">
          <Image
            src="/unsplash-img-6.jpg"
            alt="Gallery image 6"
            width={100}
            height={300}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="row-span-3 col-start-6 row-start-2">
          <Image
            src="/unsplash-img-7.jpg"
            alt="Gallery image 7"
            width={100}
            height={300}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  )
}

export default ImageGallery