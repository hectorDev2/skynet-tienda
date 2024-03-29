/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import { TShirt } from 'src/types'
const sizes = ['XS', 'S', 'M', 'L', 'XL']

export const ProductInfo = ({ info }: { info: TShirt }) => {
  const [sizeTarget, setSizeTarget] = useState('M')
  const [count, setCount] = useState(0)

  const handleAddToCart = () => {
    console.log('add to cart')
    setCount(count + 1)
  }
  const handleRemoveToCart = () => {
    console.log('remove to cart')
    if (count === 0) return
    setCount(count - 1)
  }
  return (
    <article className="product-description text-white">
      <h3 className="company">skynet Merch</h3>
      <h1 className="product-name ">{info.name}</h1>
      <p className="description">{info.description}</p>
      <div className="product-offer">
        <p className="price">
          s./ {info.price}.00 <span className="promotion"> 50% </span>
        </p>
        <p className="crossed-out-price">$100.00</p>
      </div>
      {/* <!-- call to action--> */}
      <div className="flex gap-3">
        {sizes.map((size) => (
          <button
            style={{
              border: '2px solid white',
              color: size === sizeTarget ? 'black' : 'white',
              padding: '5px',
              width: '50px',
              background: size === sizeTarget ? 'white' : 'transparent',
            }}
            key={size}
            onClick={() => setSizeTarget(size)}
          >
            <span>{size}</span>
          </button>
        ))}
      </div>
      <div className="call-to-action">
        <div className="quantity-button">
          <button className="minus" onClick={handleRemoveToCart}>
            <img src="/images/icon-minus.svg" alt="min" />
          </button>
          <span className="amount text-black">{count}</span>
          <button className="plus" onClick={handleAddToCart}>
            <img src="/images/icon-plus.svg" alt="plus" />
          </button>
        </div>
        <button
          type="submit"
          className="btn add-to-cart"
          onClick={() => setCount(count + 1)}
        >
          <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
              fille-rule="nonzero"
            />
          </svg>
          agregar al carrito
        </button>
      </div>
    </article>
  )
}
