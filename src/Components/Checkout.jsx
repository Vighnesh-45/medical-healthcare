import React, { useState } from 'react';
import "./Checkout.css"
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';
import aspirin from "./../assets/aspirin.png"
import Footer from './Layout/Footer';
import Navbar from './Layout/Navbar';
import Advertise from './Layout/Advertise';


const Checkout = ({ currentStep }) => {
    const [count, setCount] = useState(1);

    const increment = () => setCount(count + 1);
    const decrement = () => count !== 1 ? setCount(count - 1) : null
    const navigate = useNavigate
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("button press")
        try {
            const response = await fetch('http://localhost:8000/medical/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ Email: email, Pass: pass }),
            });

            if (!response.ok) {
                throw new Error('Login failed');
            }

            const data = await response.json();
            console.log(data)

            // Redirect based on user role using navigate
            navigate('/')

        } catch (error) {
            console.error('Login error:', error);
            // Handle error, show error message to user
        }
    };
    return (
        <section className="checkout-main">
            <Navbar />
            <div className="checkout-container">
                <div className="checkout-header">
                    <h2>Checkout</h2>
                    <p>Home <MdKeyboardArrowRight />Checkout</p>
                </div>
                <div className="checkout-summary">
                    <div className="checkout-details-left">
                        <div className="progress-steps">
                            <div className={`step ${currentStep >= 1 ? 'completed' : ''}`}>
                                <div className="circle">✔</div>
                                <span>Account</span>
                            </div>
                            <div className={`step ${currentStep >= 2 ? 'completed' : ''}`}>
                                <div className="circle">✔</div>
                                <span>Shipping</span>
                            </div>
                            <div className={`step ${currentStep >= 3 ? 'completed' : ''}`}>
                                <div className="circle">✔</div>
                                <span>Payment</span>
                            </div>
                        </div>

                        <div className="checkout-form">
                            <h3>Account Details</h3>
                            <form action="">
                                <label htmlFor="">Email Address</label>
                                <input type="text" placeholder="Email" value={email}
                                    onChange={(e) => setEmail(e.target.value)} />

                                <label htmlFor="">Password</label>
                                <input type="password" name="Pass" value={pass}
                                    onChange={(e) => setPass(e.target.value)} />
                            </form>
                            <div className="checkout-btn">
                                <button>Register for Account</button>
                                <button onClick={handleSubmit} className='login-btn'>Login</button>
                            </div>
                            <div className="shipping-btn">
                                <button>Cancel Order</button>
                                <button><Link to='/Shipping'>Shipping Details</Link></button>
                            </div>
                        </div>
                    </div>
                    <div className="checkout-details-right">
                        <h3>Order Summary</h3>
                        <div className="summary-card">
                            <div className="card-one">
                                <img src={aspirin} alt="" />
                            </div>
                        </div>
                        <div className="summary-content">
                            <div className="summmary-content-left">
                                <h4>Pudin Hara</h4>
                                <p>Subtotal</p>
                                <p>Tax</p>
                                <p>Shipping</p>
                                <h4>Total</h4>
                            </div>
                            <div className="summmary-content-right">
                                <div className="counter">
                                    <button className="button decrement" onClick={decrement}>-</button>
                                    <span className="count">{count}</span>
                                    <button className="button increment" onClick={increment}>+</button>
                                </div>
                                <h4>250.00</h4>
                                <p>8.00</p>
                                <p>Free</p>
                                <h4>258.00</h4>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Advertise />
            <Footer />
        </section>
    )
}

export default Checkout