import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MenuDesktop } from '../components/menu';

import '@styles/containers/Navbar.scss';

import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg'
import shoppingCart from '@icons/icon_shopping_cart.svg'


export const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggle = () => {
    setToggleMenu(!toggleMenu)
  }

  return (
    <nav>
      <img src={menu} alt="menu" className="menu" />

      <div className="navbar-left">
        <img src={logo} alt="logo" className="logo" />

        <ul>
          <li>
            <NavLink to="/">All</NavLink>
          </li>
          <li>
            <NavLink to="/clothes">Clothes</NavLink>
          </li>
          <li>
            <NavLink to="/electronics">Electronics</NavLink>
          </li>
          <li>
            <NavLink to="/furnitures">Furnitures</NavLink>
          </li>
          <li>
            <NavLink to="/toys">Toys</NavLink>
          </li>
          <li>
            <NavLink to="/others">Others</NavLink>
          </li>
        </ul>
      </div>

      <div className="navbar-right">
        <ul>
          <li 
            onClick={ handleToggle }
            className="navbar-email"
          >
            platzi@example.com
          </li>
          <li className="navbar-shopping-cart">
            <img src={shoppingCart} alt="shopping cart" />
            <div>2</div>
          </li>
        </ul>
      </div>
      { toggleMenu && <MenuDesktop />}
    </nav>
  )
}