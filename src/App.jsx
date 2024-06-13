import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from "./Components/Pages/Home"
import Contact from './Components/Contact';
import Advertise from './Components/Layout/Advertise';
import Shop from './Components/Shop';
import SingleProduct from './Components/SingleProduct';
import Cart from './Components/Cart';
import Checkout from './Components/Checkout';
import Shipping from './Components/Shipping';
import ProductComparison from './Components/ProductComparison';
import ShoppingCart from './Components/ShoppingCart';
import Profile from './Components/Profile';
import Admin from './Components/Admin/Admin';
import AddCategories from './Components/Admin/AddCategories';
import AddProduct from './Components/Admin/AddProduct';
import ViewProducts from './Components/Admin/ViewProducts';
import ViewUsers from './Components/Admin/ViewUsers';
import CategoryShop from './Components/CategoryShop';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/advertise' element={<Advertise />}/>
        <Route path='/shop' element={<Shop />}/>
        <Route path='/SingleProduct' element={<SingleProduct />}/>
        <Route path='/Cart' element={<Cart />}/>
        <Route path='/Checkout' element={<Checkout />}/>
        <Route path='/Shipping' element={<Shipping />}/>
        <Route path='/ProductComparison' element={<ProductComparison />}/>
        <Route path='/ShoppingCart' element={<ShoppingCart />}/>
        <Route path='/Profile' element={<Profile />}/>
        <Route path='/Admin' element={<Admin />}/>
        <Route path='/AddCategories' element={<AddCategories />}/>
        <Route path='/AddProduct' element={<AddProduct />}/>
        <Route path='/ViewProducts' element={<ViewProducts />}/>
        <Route path='/ViewUsers' element={<ViewUsers />}/>
        <Route path='/CategoryShop' element={<CategoryShop />}/>
      </Routes>
    </>
  )
}


export default App