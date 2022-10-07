import React from 'react';
import { ProductInfo } from '../components/product';

import '@styles/containers/MainContainer.scss';

export const MainContainer = () => {
  return (
    
    <section className="main-container">
    <div className="cards-container">
      <ProductInfo />
    </div>
  </section>
  )
}
