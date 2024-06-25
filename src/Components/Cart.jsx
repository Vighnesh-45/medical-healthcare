import React, { useState } from 'react';
import logo from "./../assets/logo.png";
import "./Cart.css";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import Footer from './Layout/Footer';
import Advertise from './Layout/Advertise';

const Cart = ({ cart }) => {
    const navigate = useNavigate();
    const [selectedIds, setSelectedIds] = useState([]);
    const [fileUploads, setFileUploads] = useState(cart.map(() => null)); // Initialize with null for each cart item

    const calculateSubtotal = () => {
        return cart.reduce((total, item) => total + item.SP, 0);
    };

    const handleFileUpload = (index, event) => {
        const file = event.target.files[0];
        const updatedUploads = [...fileUploads];
        updatedUploads[index] = file;
        setFileUploads(updatedUploads);
    };

    const handleCheckout = () => {
        const ids = cart.map(item => item.id); // Adjust 'id' to your actual unique identifier

        // Set selectedIds state to pass it to the Shipping page
        setSelectedIds(ids);

        // Navigate to the Shipping page with selected IDs and file uploads
        navigate('/Shipping', { state: { selectedIds: ids, fileUploads } });
    };

    return (
        <section className="cart-main">
            <div className="cart-container">
                <div className="cart-header">
                    <img src={logo} alt="" />
                    <h2>Cart
                        <p>Home<MdKeyboardArrowRight />Cart</p>
                    </h2>
                </div>
                <div className="cart-overview">
                    <div className="cart-left">
                        <table className="cart-table">
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Subtotal</th>
                                    <th>Add Prescription</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map((item, index) => (
                                    <tr key={index} className="cart-item">
                                        <td>{item.Heading}</td>
                                        <td>Rs. {item.SP}</td>
                                        <td>1</td>
                                        <td>Rs. {item.SP}</td>
                                        <td>
                                            <input
                                                type="file"
                                                accept=".jpg,.jpeg,.png,.pdf"
                                                onChange={(event) => handleFileUpload(index, event)}
                                            />
                                            {fileUploads[index] && <span>{fileUploads[index].name}</span>}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
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
