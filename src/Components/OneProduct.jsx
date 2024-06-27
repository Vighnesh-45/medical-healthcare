import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import { MdKeyboardArrowRight, MdOutlineStarPurple500 } from "react-icons/md";
import Footer from './Layout/Footer';
import "./SingleProduct.css";

const OneProduct = ({ addToCart }) => {
    const [count, setCount] = useState(1);
    const [relatedProducts, setRelatedProducts] = useState([]);
    const [single, setSingle] = useState(null);
    const { heading } = useParams();

    const increment = () => setCount(count + 1);
    const decrement = () => count !== 1 ? setCount(count - 1) : null;

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`https://api-5e1h.onrender.com/medical/medicine/all`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                const product = data.find(item => item.Heading === heading);
                setSingle(product);
                if (product) {
                    fetchRelatedProducts(product.id);
                }
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };

        const fetchRelatedProducts = async (productId) => {
            try {
                const response = await fetch(`https://api-5e1h.onrender.com/medical/medicine/all/${productId}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const resData = await response.json();
                setRelatedProducts(resData);
            } catch (error) {
                console.error("Error fetching related products:", error);
            }
        };

        fetchProduct();
    }, [heading]);

    const handleAddToCart = (product) => {
        const productWithQuantity = { ...product, quantity: count };
        addToCart(productWithQuantity);
        navigate('/cart');
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
                    {single && <p>{single.Heading}</p>}
                </div>
                <div className="product-info">
                    <div className="product-info-left">
                        {single ? (
                            <div className="info-left-container">
                                <img src={single.Image} alt={single.Heading} />
                            </div>
                        ) : (
                            <p>No product details available</p>
                        )}
                    </div>
                    <div className="product-info-right">
                        {single ? (
                            <div className="info-right-header">
                                <h2>{single.Heading}</h2>
                                <h3>Rs. {single.SP}</h3>
                            </div>
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
                            <p>The contents here are for informational purposes only and not intended to be a substitute for professional medical advice, diagnosis, or treatment. Please seek the advice of a physician or other qualified health provider with any questions you may have regarding a medical condition. The content on the Platform should not be considered or used as a substitute for professional and qualified medical advice. Please consult your doctor for any query pertaining to medicines, tests and/or diseases, as we support, and do not replace the doctor-patient relationship.</p>
                        </div>
                        <div className="product-btn">
                            <div className="counter-container">
                                <button className="counter-button" onClick={decrement}>-</button>
                                <span className="counter-display">{count}</span>
                                <button className="counter-button" onClick={increment}>+</button>
                            </div>
                            <div className="cart-btn">
                                {single && (
                                    <button onClick={(e) => { e.stopPropagation(); handleAddToCart(single); }}>Add to Cart</button>
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

export default OneProduct;
