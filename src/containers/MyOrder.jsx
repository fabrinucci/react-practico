import React, { useContext, useState } from 'react';
import arrow from '@icons/flechita.svg';

import '@styles/containers/MyOrder.scss';
import { MyOrderInfo, MyOrderItem } from '../components/myOrder';
import { AppContext } from '../context';

export const MyOrder = ({ setToggleOrder }) => {

  const { state: {cart} } = useContext(AppContext);

  const sumTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum
  }

  const handleClose = () => {
    setToggleOrder(false);
  }

  return (
    <aside className="MyOrder-detail">
      <div className="title-container">
        <img 
          onClick={ handleClose }
          src={arrow}
          alt="arrow" 
        />
        <p className="title">My order</p>
      </div>

      <div className="my-order-content">
        {
          cart.map( (product, index) => {
            return (
              <MyOrderItem 
                indexValue={index}
                key={index}
                // key={`order-item-${product.id}`} 
                product={product} 
              />
            )
          })
        }
      </div>
      <div className='my-order-total'>
        <MyOrderInfo total={sumTotal()} />

        <button className="primary-button">
          Checkout
        </button>
      </div>
    </aside>
  )
}
