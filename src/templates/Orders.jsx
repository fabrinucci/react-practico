import React from 'react';
import { Order, OrderItem } from '../components/orders';

import '@styles/templates/Orders.scss';

export const Orders = () => {
  return (
    <div className="Orders-my-order">
      <div className="Orders-my-order-container">
        <h1 className="Orders-title">My orders</h1>

        <div className="Orders-my-order-content">
          <Order />
          <OrderItem />
        </div>
      </div>
    </div>
  )
}
