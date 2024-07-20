import React, { useState, useEffect } from 'react';
import logo from "./../assets/logo.png";
import "./Cart.css";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import Footer from './Layout/Footer';
import Advertise from './Layout/Advertise';
import axios from 'axios';
import { MdDelete } from "react-icons/md";

const Cart = ({ cart }) => {
    const navigate = useNavigate();
    const [file, setFile] = useState(null);
    const [selectedIds, setSelectedIds] = useState([]);
    const [image, setImage] = useState(null);
    const [cartItems, setCartItems] = useState(cart); // State to manage cart items

    useEffect(() => {
        setCartItems(cart); // Update cartItems state when cart prop changes
    }, [cart]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleUpload = async () => {
        if (!file) {
            console.error("No file selected");
            return;
        }

        try {
            const formData = new FormData();
            formData.append('file', file);

            const response = await axios.post("http://localhost:8000/upload", formData);
            console.log("File upload successful", response.data);

            setImage(response.data.image);

        } catch (error) {
            console.error("Error uploading file:", error);
        }
    };

    const calculateSubtotal = () => {
        return cartItems.reduce((total, item) => total + item.SP, 0);
    };

    const handleCheckout = () => {
        const ids = cartItems.map(item => item.id); // Adjust 'id' to your actual unique identifier

        setSelectedIds(ids);

        // Navigate to the Shipping page with selected IDs and file uploads
        navigate('/Shipping', { state: { selectedIds: ids } });
    };

    const handleDeleteItem = (index) => {
        const updatedCart = [...cartItems];
        updatedCart.splice(index, 1); // Remove the item at the specified index
        setCartItems(updatedCart); // Update cartItems state with the modified cart
    };

    return (
        <section className="cart-main">
            <div className="cart-container">
                <div className="cart-header">
                    <img src={logo} alt="" />
                    <h2>Cart
                        <p>Home<MdKeyboardArrowRight className='right-arrow' />Cart</p>
                    </h2>
                </div>
                <div className="cart-overview">
                    <div key={index} className="cart-left">
                        <img src={item.Image} alt={item.Heading} />
                        <div key={index} className="cart-item">
                            <h2>{item.Heading}</h2>
                            <p>Rs. {item.SP}</p>
                            <p>1</p>
                            <p>Rs. {item.SP}</p>
                            <MdDelete className='del-icon' onClick={() => handleDeleteItem(index)} />
                        </div>
                    </div>

                    <div className="cart-total">
                        <div className="total-header">
                            <h2>Cart Totals</h2>
                        </div>
                        <div className="total-content">
                            <h4>Subtotal</h4>
                            <p>Rs. {calculateSubtotal()}</p>
                        </div>
                        <div className="total-content">
                            <h4>Total</h4>
                            <p>Rs. {calculateSubtotal()}</p>
                        </div>
                        <div className="checkout-btn">
                            <button onClick={handleCheckout}>Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
            <Advertise />
            <Footer />
        </section>
    );
};

export default Cart;
