import React from 'react';
import { Link } from 'react-router-dom';

import '@styles/components/menu.scss';

export const MenuDesktop = () => {
  return (
    <div className='desktop-menu'>
      <ul>
        <li>
          <Link to='/orders' className='title'>My orders</Link>
        </li>

        <li>
          <Link to='/'>My account</Link>
        </li>

        <li>
          <a href='/'>Sign out</a>
        </li>
      </ul>
    </div>
  )
}
