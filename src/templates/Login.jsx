import React from 'react';
import { Link } from 'react-router-dom';

import '@styles/templates/Login.scss';

import logo from '@logos/logo_yard_sale.svg';

export const Login = () => {
  return (
    <div className="login">
    <div className="form-container">
      <img src={logo} alt="logo" className="logo" />

      <form action="/" className="form">
        <label className="label">Email address</label>
        <input type="text" id="email" placeholder="platzi@example.cm" className="input input-email" />

        <label className="label">Password</label>
        <input type="password" id="password" placeholder="*********" className="input input-password" />

        <input type="submit" value="Log in" className="primary-button login-button" />
        <Link to="/new-password">Forgot my password</Link>
      </form>

      <button className="secondary-button signup-button">Sign up</button>
    </div>
  </div>
  )
}
