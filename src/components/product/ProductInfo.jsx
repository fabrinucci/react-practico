import React from 'react';
import logo from '@icons/bt_add_to_cart.svg';

import '@styles/components/product.scss';

export const ProductInfo = () => {
  return (
    <div className="ProductInfo-card">
      <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
      <div className="ProductInfo-details">
        <div>
          <p>$120,00</p>
          <p>Bike</p>
        </div>
        <figure>
          <img src={logo} alt="logo" />
        </figure>
      </div>
    </div>
  )
}
