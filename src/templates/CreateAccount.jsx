import React from 'react';

import '@styles/templates/CreateAccount.scss';

export const CreateAccount = () => {
  return (
    <div className="login">
      <div className="form-container">
        <h1 className="title">My account</h1>

        <form action="/" className="form">
          <div>
            <label className="label">Name</label>
            <input type="text" id="name" placeholder="Teff" className="input input-name" />

            <label className="label">Email</label>
            <input type="text" id="email" placeholder="platzi@example.com" className="input input-email" />

            <label className="label">Password</label>
            <input type="password" id="password" placeholder="*********" className="input input-password" />
          </div>

          <input type="submit" value="Create" className="primary-button login-button" />
        </form>
      </div>
    </div>
  )
}
