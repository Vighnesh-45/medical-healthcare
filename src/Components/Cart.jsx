import React, { useState } from 'react';
import logo from "./../assets/logo.png";
import "./Cart.css";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import Footer from './Layout/Footer';
import Advertise from './Layout/Advertise';
import axios from 'axios';

const Cart = ({ cart }) => {
    const navigate = useNavigate();
    const [file, setFile] = useState(null);
    const [selectedIds, setSelectedIds] = useState([]);
    const [image, setImage] = useState(null);

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

            // Assuming response.data contains image information
            setImage(response.data.image);

            // You can handle the response as needed
        } catch (error) {
            console.error("Error uploading file:", error);
        }
    };

    const calculateSubtotal = () => {
        return cart.reduce((total, item) => total + item.SP, 0);
    };

    const handleCheckout = () => {
        const ids = cart.map(item => item.id); // Adjust 'id' to your actual unique identifier

        // Set selectedIds state to pass it to the Shipping page
        setSelectedIds(ids);

        // Navigate to the Shipping page with selected IDs and file uploads
        navigate('/Shipping', { state: { selectedIds: ids } });
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
                        <table>

                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Subtotal</th>
                                <th>Add Prescription</th>
                            </tr>

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
                                            onChange={e => setFile(e.target.files[0])}
                                        />
                                        <button onClick={handleUpload}>Upload</button>
                                    </td>
                                </tr>
                            ))}
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
