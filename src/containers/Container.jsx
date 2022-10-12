import React from 'react';
import '@styles/containers/Container.scss';

export const Container = ({ children }) => {
  return (
    <div className='Container'>{ children }</div>
  )
}
