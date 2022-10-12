import React, { useContext } from 'react';
import '@styles/components/myOrder.scss';
import iconClose from '@icons/icon_close.png';
import { AppContext } from '../../context';

export const MyOrderItem = ({ indexValue, product }) => {
  const { removeFromCart } = useContext(AppContext);

  return (
    <div className='shopping-cart'>
      <figure>
        <img src={product.images[0]} alt={product.title} />
      </figure>
      <p>{product.title}</p>
      <p>${product.price}</p>
      <img 
        onClick={ () => removeFromCart(indexValue) }
        src={iconClose} 
        alt='close' 
      />
    </div>
  )
}
