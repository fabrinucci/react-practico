import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MenuDesktop } from '../components/menu';
import { AppContext } from '../context';
import { MyOrder } from './';

import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg'
import shoppingCart from '@icons/icon_shopping_cart.svg'

import '@styles/containers/Navbar.scss';

export const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  const [toggleOrder, setToggleOrder] = useState(false);

  const { state: {cart} } = useContext(AppContext);

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu)
  }

  const handleToggleOrder = () => {
    setToggleOrder(!toggleOrder)
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
            onClick={ handleToggleMenu }
            className="navbar-email"
          >
            platzi@gmail.com
          </li>
          <li 
            onClick={ handleToggleOrder }
            className="navbar-shopping-cart"
          >
            <img src={shoppingCart} alt="shopping cart" />
            {
              (cart.length > 0) && <div>{cart.length}</div>
            }
          </li>
        </ul>
      </div> 
      { (cart.length > 0 && toggleOrder) && <MyOrder /> }
      { toggleMenu && <MenuDesktop /> }
    </nav>
  )
}