import React, { useState } from 'react';
import addToCartLogo from '@icons/bt_add_to_cart.svg';

import '@styles/components/product.scss';

export const ProductItem = ({ product }) => {

  const [addToCart, setAddToCart] = useState([]);

  const handleClick = () => {
    setAddToCart([])
  }

  return (
    <div className='ProductItem-card'>
      <img src={product.images[0]} alt={product.title} />
      <div className='ProductItem-details'>
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure
          onClick={handleClick}
        >
          <img src={addToCartLogo} alt='addToCart' />
        </figure>
      </div>
    </div>
  )
}
