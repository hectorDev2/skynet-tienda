/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { ProductGallery } from './ProductGallery'
import { ProductInfo } from './ProductInfo'
import { TShirt } from 'src/types'

export const Content = ({ tShirt }: { tShirt: TShirt }) => {
  console.log(tShirt)

  return (
    <main>
      {/* <!-- product section --> */}
      <section className="section-center product-section text-white">
        <section className="product-component">
          {/* <!-- image gallery --> */}
          <ProductGallery />
          {/* <!--product description --> */}
          <ProductInfo info={tShirt} />
        </section>
      </section>
      {/* <!-- end of product section --> */}

      {/* <!-- modal lightbox --> */}
      <section className="modal">
        {/* <!-- image gallery --> */}
        <div className="images-gallery">
          {/* <!-- main image --> */}
          <figcaption className="main-image">
            {/* <!-- close button --> */}
            <button className="close-modal">
              <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                  fill-rule="evenodd"
                />
              </svg>
            </button>
            {/* <!--prev button --> */}
            <button className="prev-btn">
              <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11 1 3 9l8 8"
                  stroke-width="3"
                  fill="none"
                  fill-rule="evenodd"
                />
              </svg>
            </button>
            <img
              src="/images/image-product-1.jpg"
              alt="image product 1"
              className="main Image"
            />
            {/* <!--next button --> */}
            <button className="next-btn">
              <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="m2 1 8 8-8 8"
                  stroke-width="3"
                  fill="none"
                  fill-rule="evenodd"
                />
              </svg>
            </button>
          </figcaption>
          {/* <!-- gallery thumbnails for desktop --> */}
          <div className="images-thumbnails">
            <figcaption className="thumbnails-image">
              <img
                src="/images/image-product-1-thumbnail.jpg"
                alt="image thumbnails 1"
                className="Image thumb"
              />
            </figcaption>
            <figcaption className="thumbnails-image">
              <img
                src="/images/image-product-2-thumbnail.jpg"
                alt="image thumbnails 2"
                className="Image thumb"
              />
            </figcaption>
            <figcaption className="thumbnails-image">
              <img
                src="/images/image-product-3-thumbnail.jpg"
                alt="image thumbnails 3"
                className="Image thumb"
              />
            </figcaption>
            <figcaption className="thumbnails-image">
              <img
                src="/images/image-product-4-thumbnail.jpg"
                alt="image thumbnails 4"
                className="Image thumb"
              />
            </figcaption>
          </div>
        </div>
      </section>
      {/* <!-- end of modal lightbox --> */}
    </main>
  )
}
