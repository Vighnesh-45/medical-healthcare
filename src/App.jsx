import { Routes, Route } from 'react-router-dom';
import Home from "./Components/Pages/Home"
import About from "./Components/About"
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
import AddProduct from './Components/Admin/AddProduct';
import Signup from './Components/Auth/Signup';
import Login from './Components/Auth/Login';

import CategoryShop from './Components/CategoryShop';
import AddCategories from './Components/Admin/AddCategories';
import ViewProducts from './Components/Admin/ViewProducts';
import ViewUsers from './Components/Admin/ViewUsers';
import { useState } from 'react';
import AdminLogin from './Components/Admin/AdminLogin';

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/advertise' element={<Advertise />} />
        <Route path="/shop" element={<Shop cart={cart} addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} />} />
        <Route path='/SingleProduct' element={<SingleProduct />} />
        <Route path='/Checkout' element={<Checkout />} />
        <Route path='/Shipping' element={<Shipping />} />
        <Route path='/ProductComparison' element={<ProductComparison />} />
        <Route path='/ShoppingCart' element={<ShoppingCart />} />
        <Route path='/Profile' element={<Profile />} />
        <Route path='/Admin' element={<Admin />} />
        <Route path='/AddProduct' element={<AddProduct />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/CategoryShop' element={<CategoryShop />} />
        <Route path='/AddCategory' element={<AddCategories />} />
        <Route path='/ViewProducts' element={<ViewProducts />} />
        <Route path='/ViewUsers' element={<ViewUsers />} />
        <Route path='/AdminLogin' element={<AdminLogin />} />
      </Routes>
    </>
  )
}


export default App