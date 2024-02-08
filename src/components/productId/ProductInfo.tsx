import React, { useState } from 'react'

export const ProductInfo = ({ info }) => {
  console.log(info)

  const [count, setCount] = useState(0)
  return (
    <article className="product-description text-white">
      <h3 className="company">skynet Merch</h3>
      <h1 className="product-name ">{info.name}</h1>
      <p className="description">{info.description}</p>
      <div className="product-offer">
        <p className="price">
          $125.00 <span className="promotion"> 50% </span>
        </p>
        <p className="crossed-out-price">$250.00</p>
      </div>
      {/* <!-- call to action--> */}
      <div className="call-to-action">
        <div className="quantity-button">
          <button className="minus" onClick={() => setCount(count - 1)}>
            <img src="/images/icon-minus.svg" alt="min" />
          </button>
          <span className="amount text-black">{count}</span>
          <button className="plus" onClick={() => setCount(count + 1)}>
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
          add to cart
        </button>
      </div>
    </article>
  )
}
