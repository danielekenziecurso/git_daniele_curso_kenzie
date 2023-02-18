import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePages from '../pages/Home';
import PageLogin from '../pages/Login';
import PageRegister from '../pages/Register';

const AppRoutes = () => {
  return (
    <Routes>
       <Route path='/' element={<PageLogin/>} />
       <Route path='/register' element={<PageRegister/> }/>
       <Route path='/home' element={ <HomePages/> }/>
    </Routes>
  )
}

export default AppRoutes; 