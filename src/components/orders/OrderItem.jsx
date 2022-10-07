import React from 'react';

import '@styles/components/orders.scss';

export const OrderItem = () => {
  return (
    <>
      <div className="OrderItem-order">
        <p>
          <span>03.25.21</span>
          <span>6 articles</span>
        </p>
        <p>$560.00</p>
      </div>

      <div className="OrderItem-shopping-cart">
        <figure>
          <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike" />
        </figure>
        <p>Bike</p>
        <p>$30,00</p>
      </div>
    </>
  )
}
