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
import Admin from './Components/Admin/Admin';
import AddCategories from './Components/Admin/AddCategories';
import AddProduct from './Components/Admin/AddProduct';

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
        <Route path='/Admin' element={<Admin />}/>
        <Route path='/AddCategories' element={<AddCategories />}/>
        <Route path='/AddProduct' element={<AddProduct />}/>
      </Routes>
    </>
  )
}


export default App