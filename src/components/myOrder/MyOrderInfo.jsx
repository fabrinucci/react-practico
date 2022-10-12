import React from 'react';
import '@styles/components/myOrder.scss';

export const MyOrderInfo = ({ total }) => {
  return (
    <div className='order'>
      <p>
        <span>Total</span>
      </p>
      <p>${total}</p>
    </div>
  )
}
