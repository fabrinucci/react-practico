import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Clothes, Furnitures, Electronics, Home, NotFound, Others, Toys } from '../pages';
import { Login, NewPassword, RecoveryPassword } from '../templates';
import { Layout } from '../containers';
import { Navbar } from '../components';

export const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/clothes' element={<Clothes />}/>
          <Route path='/electronics' element={<Electronics />}/>
          <Route path='/furnitures' element={<Furnitures />}/>
          <Route path='/toys' element={<Toys />}/>
          <Route path='/others' element={<Others />}/>

          {/* Auth */}
          <Route path='/login' element={<Login />}/>
          <Route path='/new-password' element={<NewPassword />}/>
          <Route path='/recovery-password' element={<RecoveryPassword />}/>

          {/* ******* */}
          <Route path='*' element={<NotFound />}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}