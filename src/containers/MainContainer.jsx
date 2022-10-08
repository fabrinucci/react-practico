import React from 'react';

import { ProductItem } from '../components/product';
import { useGetProducts } from '../hooks';

import '@styles/containers/MainContainer.scss';

const API = 'https://api.escuelajs.co/api/v1/products?limit=12&offset=1';

export const MainContainer = () => {

  const products = useGetProducts(API)

  return (
    
    <section className="main-container">
    <div className="cards-container">
      { 
        products.map( product => (
          <ProductItem product={product} key={product.id}/>
        ))
      }
    </div>
  </section>
  )
}
