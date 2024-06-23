import React, { useState, useEffect } from 'react';
import "./SingleProduct.css";
import { Link, useNavigate } from "react-router-dom";
import Navbar from './Layout/Navbar';
import Footer from './Layout/Footer';
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdOutlineStarPurple500 } from "react-icons/md";

const SingleProduct = ({ single, addToCart, addToSingle }) => {
    const [count, setCount] = useState(1);
    const [relatedProducts, setRelatedProducts] = useState([]);
    const navigate = useNavigate();

    const increment = () => setCount(count + 1);
    const decrement = () => count !== 1 ? setCount(count - 1) : null;

    const handleAddToCart = (product) => {
        const productWithQuantity = { ...product, quantity: count };
        addToCart(productWithQuantity);
        navigate('/cart');
    };

    useEffect(() => {
        if (single && single.length > 0) {
            fetchRelatedProducts(single[0].id);
        }
    }, [single]);

    const fetchRelatedProducts = async (productId) => {
        try {
            console.log(`Fetching related products for product ID: ${productId}`);
            const response = await fetch(`https://api-k7vh.onrender.com/medical/medicine/all/${productId}`, {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            });
            console.log(`Response status: ${response.status}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const resData = await response.json();
            console.log("Response data:", resData);

            if (!resData || resData.length === 0) {
                console.log("No related products data received");
                setRelatedProducts([]);
            } else {
                setRelatedProducts(resData);
            }
        } catch (error) {
            console.error("Error fetching related products:", error);
        }
    };

    return (
        <section className="singleproduct-main">
            <div className="singleproduct-container">
                <div className="singleproduct-header">
                    <p>Home</p>
                    <MdKeyboardArrowRight />
                    <p>Shop</p>
                    <MdKeyboardArrowRight />
                    <hr />
                    {single && single.length > 0 && <p>{single[0].Heading}</p>}
                </div>
                <div className="product-info">
                    <div className="product-info-left">
                        {single && single.length > 0 ? (
                            single.map((item) => (
                                <div key={item.id} className="info-left-container">
                                    <img src={item.Image} alt={item.Heading} />
                                </div>
                            ))
                        ) : (
                            <p>No product details available</p>
                        )}
                    </div>
                    <div className="product-info-right">
                        {single && single.length > 0 ? (
                            single.map((item) => (
                                <div key={item.id} className="info-right-header">
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
                            <p>4 out of 5 stars</p>
                        </div>
                        <div className="product-description">
                            <p>Disclaimer</p>
                            <p>The contents here are for informational purposes only and not
                                intended to be a substitute for professional medical advice,
                                diagnosis, or treatment. Please seek the advice of a physician or
                                other qualified health provider with any questions you may have
                                regarding a medical condition. The content on
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
                                {single && single.length > 0 && (
                                    <button onClick={(e) => { e.stopPropagation(); handleAddToCart(single[0]); }}>Add to Cart</button>
                                )}
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
                    {relatedProducts.length > 0 ? (
                        relatedProducts.map((res) => (
                            <div className="card-one" key={res.id}>
                                <img src={res.Image} alt={res.Heading} />
                                <h2>{res.Heading}</h2>
                                <h4>{res.Subheading}</h4>
                                <h3>Rs. {res.SP}</h3>
                            </div>
                        ))
                    ) : (
                        <p>No related products available</p>
                    )}
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
