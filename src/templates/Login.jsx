import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

import logo from '@logos/logo_yard_sale.svg';

import '@styles/templates/Login.scss';

export const Login = () => {

  const form = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      username: formData.get('email'),
      password: formData.get('password'),
    }

    console.log(data);
  }

  return (
    <div className='login fixed'>
      <div className='form-container'>
        <img src={logo} alt='logo' className='logo' />

        <form 
          action='/' 
          className='form'
          ref={ form }
          onSubmit={ handleSubmit }
        >
          <label className='label'>Email address</label>
          <input type='text' name='email' placeholder='platzi@example.cm' className='input input-email' />

          <label className='label'>Password</label>
          <input type='password' name='password' placeholder='*********' className='input input-password' />

          <button 
            type='submit' 
            className='primary-button login-button'
          >
            Log in
          </button>
          <Link to='/new-password'>Forgot my password</Link>
        </form>

        <button 
          className='secondary-button signup-button'
        >
          Sign up
        </button>
      </div>
    </div>
  )
}
