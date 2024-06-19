import React, { useState } from 'react';
import "./SingleProduct.css";
import { Link } from "react-router-dom";
import Navbar from './Layout/Navbar';
import Footer from './Layout/Footer';
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdOutlineStarPurple500 } from "react-icons/md";
import aspirin from "./../assets/aspirin.png";

const SingleProduct = ({ single }) => {
    const [selectedIds, setSelectedIds] = useState([]);
    const [count, setCount] = useState(1);

    const handleSingleProduct = () => {
        // Assuming cart items have unique IDs and you want to pass those to the Shipping page
        const ids = single.map(item => item.id);
        setSelectedIds(ids);
    };

    const increment = () => setCount(count + 1);
    const decrement = () => count !== 1 ? setCount(count - 1) : null;

    return (
        <section className="singleproduct-main">
            <Navbar />
            <div className="singleproduct-container">
                <div className="singleproduct-header">
                    <p>Home</p>
                    <MdKeyboardArrowRight />
                    <p>Shop</p>
                    <MdKeyboardArrowRight />
                    <hr />
                    <p>{product.Heading}</p>
                </div>
                <div className="product-info">
                    <div className="product-info-left">
                        {single && single.length > 0 ? (
                            single.map((item, index) => (
                                <div key={index} className="info-left-container">
                                    <img src={item.Image} alt="" />
                                </div>
                            ))
                        ) : (
                            <p>No product details available</p>
                        )}
                    </div>
                    <div className="product-info-right">
                        {single && single.length > 0 ? (
                            single.map((item, index) => (
                                <div key={index} className="info-right-header">
                                    <h2>{item.Heading}</h2>
                                    <h3>Rs. {item.SP}</h3>
                                </div>
                            ))
                        ) : (
                            <p>No product details available</p>
                        )}
                        <div className="product-review">
                            <MdOutlineStarPurple500 />
                            <MdOutlineStarPurple500 />
                            <MdOutlineStarPurple500 />
                            <MdOutlineStarPurple500 />
                            <hr />
                            <p></p>
                        </div>
                        <div className="product-description">
                            <p>Disclaimer</p>
                            <p>The contents here are for informational purposes only and not
                                intended to be a substitute for professional medical advice,
                                diagnosis, or treatment. Please seek the advice of a physician or
                                other qualified health provider with any questions you may have
                                regarding a medical condition. Medkart on any information and
                                subsequent action or inaction is solely at the user's risk, and we
                                do not assume any responsibility for the same. The content on
                                the Platform should not be considered or used as a substitute
                                for professional and qualified medical advice. Please consult
                                your doctor for any query pertaining to medicines, tests and/or
                                diseases, as we support, and do not replace the doctor-patient
                                relationship.</p>
                        </div>
                        <div className="product-btn">
                            <div className="counter-container">
                                <button className="counter-button" onClick={decrement}>-</button>
                                <span className="counter-display">{count}</span>
                                <button className="counter-button" onClick={increment}>+</button>
                            </div>
                            <div className="cart-btn">
                                <Link to='/Cart'><button>Add to Cart</button></Link>
                            </div>
                            <div className="compare-btn">
                                <Link to='/ProductComparison'><button>+ Compare</button></Link>
                            </div>
                        </div>
                        <hr />
                    </div>
                </div>
                <div className="product-header">
                    <h2>Related Products</h2>
                </div>
                <div className="singleproduct-cards">
                    {/* Display related products */}
                </div>
                <div className="show-button">
                    <Link to="/Shop"><button>Show More</button></Link>
                </div>
            </div>
            <Footer />
        </section>
    );
};

export default SingleProduct;
