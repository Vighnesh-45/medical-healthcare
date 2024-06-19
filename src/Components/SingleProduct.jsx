import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "./SingleProduct.css"
import { Link } from "react-router-dom"
import Navbar from './Layout/Navbar'
import Footer from './Layout/Footer'
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdOutlineStarPurple500 } from "react-icons/md";

const SingleProduct = () => {
    const [count, setCount] = useState(1);
    const [product, setProduct] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchProduct = async () => {
            const response = await fetch(`https://codify-api-541e.onrender.com/medical/medicine/${id}`, {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            });
            const resData = await response.json();
            if (!resData) {
                console.log("error");
            } else {
                setProduct(resData);
            }
        };

        fetchProduct();
    }, [id]);

    const increment = () => setCount(count + 1);
    const decrement = () => count !== 1 ? setCount(count - 1) : null;

    if (!product) return <div>Loading...</div>;

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
                        <div className="info-left-container">
                            <img src={product.Image} alt={product.Heading} />
                        </div>
                    </div>
                    <div className="product-info-right">
                        <div className="info-right-header">
                            <h2>{product.Heading}</h2>
                            <h3>Rs. {product.SP}</h3>
                        </div>
                        <div className="product-review">
                            <MdOutlineStarPurple500 />
                            <MdOutlineStarPurple500 />
                            <MdOutlineStarPurple500 />
                            <MdOutlineStarPurple500 />
                            <hr />
                            <p>5 Customer Review</p>
                        </div>
                        <div className="product-description">
                            <p>Disclaimer</p>
                            <p>The contents here is for informational purposes only and not
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
    )
}

export default SingleProduct;
