import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from "./Components/Pages/Home"
import Contact from './Components/Contact';
import Advertise from './Components/Layout/Advertise';
import Shop from './Components/Shop';
import SingleProduct from './Components/SingleProduct';
import ProductComparison from './Components/ProductComparison';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/advertise' element={<Advertise />}/>
        <Route path='/shop' element={<Shop />}/>
        <Route path='/SingleProduct' element={<SingleProduct />}/>
        <Route path='/ProductComparison' element={<ProductComparison />}/>
      </Routes>
    </>

  )
}

export default App