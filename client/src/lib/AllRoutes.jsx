import About from '@/pages/About/About'
import Contact from '@/pages/Conatct/Contact'
import Login from '@/pages/login/Login'
import React from 'react'
import { Route, Routes } from "react-router-dom";
import Root from '@/components/shared/Root';
import HeroPlatform from '@/pages/Herosection/HeroPlatform';

const AllRoutes = () => {
  return (
    <>
    <Routes>
        <Route  element={<Root/>}>
          <Route path='/' element={<HeroPlatform/>} />
            <Route path='/login' element={<Login/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/customersupport' element={<Contact/>} />
            </Route>
        
    </Routes>
    </>
  )
}

export default AllRoutes