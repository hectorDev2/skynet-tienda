/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'

export const ProductGallery = ({ images }: { images: string[] }) => {
  const [imagePrincipal, setImagePrincipal] = useState(images[0])
  console.log(images, 'images')

  return (
    <div className="images-gallery">
      {/* <!-- main image --> */}
      <figcaption className="main-image">
        {/* <!--prev button --> */}
        <button className="prev-btn">
          <img src="/images/icon-previous.svg" alt="previous icon" />
        </button>
        <img
          src={imagePrincipal}
          alt="image product 1"
          className="main Image w-[362px] h-[362px] "
        />
        {/* <!--next button --> */}
        <button className="next-btn">
          <img src="/images/icon-next.svg" alt="next icon" />
        </button>
      </figcaption>
      {/* <!-- gallery thumbnails for desktop --> */}
      <div className="images-thumbnails">
        {images.map((image) => (
          <figcaption
            key={image}
            className={`thumbnails-image ${
              image == imagePrincipal && 'border-4  border-cyan-800'
            }`}
            onClick={() => setImagePrincipal(image)}
          >
            <img
              className=" Image w-[100px] h-[100px]"
              src={image}
              alt="image thumbnails 4"
            />
          </figcaption>
        ))}
      </div>
    </div>
  )
}
