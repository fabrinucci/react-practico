import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/components/Navbar.scss';

export const Navbar = () => {
  return (
    <nav>
      <img src="assets/icons/icon_menu.svg" alt="menu" className="menu" />

      <div className="navbar-left">
        <img src="assets/logos/logo_yard_sale.svg" alt="logo" className="logo" />

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
          <li className="navbar-email">platzi@example.com</li>
          <li className="navbar-shopping-cart">
            <img src="assets/icons/icon_shopping_cart.svg" alt="shopping cart" />
            <div>2</div>
          </li>
        </ul>
      </div>
    </nav>
  )
}