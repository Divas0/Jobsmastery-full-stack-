import About from '@/pages/About/About'
import Contact from '@/pages/Conatct/Contact'
import Login from '@/pages/login/Login'
import React from 'react'
import { Route, Routes } from "react-router-dom";
import Root from '@/components/shared/Root';
import HeroPlatform from '@/pages/Herosection/HeroPlatform';
import Register from '@/pages/register/Register';
import Home from '@/App';

const AllRoutes = () => {
  return (
    <>
    <Routes>
        <Route  element={<Root/>}>
          <Route path='/' element={<Home/>} />
            
            </Route>
            <Route path='/login' element={<Login/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/customersupport' element={<Contact/>} />
            <Route path='/register' element={<Register/> }/>
        
    </Routes>
    </>
  )
}

export default AllRoutes