import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from "./Components/Pages/Home"
import Contact from './Components/Contact';
import Advertise from './Components/Layout/Advertise';
import Shop from './Components/Shop';
import SingleProduct from './Components/SingleProduct';
import ProductComparison from './Components/ProductComparison';
import Cart from './Components/Cart';
import Checkout from './Components/Checkout';
import Shipping from './Components/Shipping';
import ShoppingCart from './Components/ShoppingCart';

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
        <Route path='/Cart' element={<Cart />}/>
        <Route path='/Checkout' element={<Checkout />}/>
        <Route path='/Shipping' element={<Shipping />}/>
        <Route path='/ShoppingCart' element={<ShoppingCart />}/>
      </Routes>
    </>
  )
}


export default App