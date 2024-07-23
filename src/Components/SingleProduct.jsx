import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addItem } from "../redux/slices/compareSlice";
import { MdKeyboardArrowRight, MdOutlineStarPurple500, MdOutlineStarHalf } from "react-icons/md";
import Footer from './Layout/Footer';
import "./SingleProduct.css";

// Check login status function
const checkLoginStatus = () => {
    const token = localStorage.getItem('userToken');
    return !!token;
};

const SingleProduct = ({ addToCart }) => {
    const dispatch = useDispatch();
    const [count, setCount] = useState(1);
    const [single, setSingle] = useState(null);
    const [error, setError] = useState(null);
    const [relatedProducts, setRelatedProducts] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();

    // Login state
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(checkLoginStatus());

    // Redirect to login if not logged in
    useEffect(() => {
        const isLoggedIn = localStorage.getItem('userToken'); 
        console.log(isLoggedIn);
        // Check login status from local storage
        if (!isLoggedIn) {
            handleLoginRedirect(`/singleproduct/${id}`)  // Redirect to login page if not logged in
        }
    }, []);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    const handleLoginRedirect = (target) => {
        navigate('/login', { state: { from: target } });
    };

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`https://api-5e1h.onrender.com/medical/medicine/get/${id}`, {
                    method: "GET",
                    headers: {
                        "Content-type": "application/json"
                    }
                });
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const resData = await response.json();
                setSingle(resData);

                const relatedResponse = await fetch(`https://api-5e1h.onrender.com/medical/medicine/all`);
                if (!relatedResponse.ok) {
                    throw new Error(`HTTP error! status: ${relatedResponse.status}`);
                }
                const relatedData = await relatedResponse.json();
                const shuffledProducts = shuffleArray(relatedData);
                const filteredProducts = shuffledProducts.filter(product => product.id !== id);
                const slicedProducts = filteredProducts.slice(0, 4);
                setRelatedProducts(slicedProducts);

            } catch (error) {
                console.error("Error fetching product:", error);
                setError(error.message);
            }
        };

        fetchProduct();
    }, [id]);

    const increment = () => setCount(count + 1);
    const decrement = () => count > 1 ? setCount(count - 1) : null;

    const handleAddToCart = (product) => {
        const productWithQuantity = { ...product, quantity: count };
        addToCart(productWithQuantity);
        navigate('/cart');
    };

    const shuffleArray = (array) => {
        let currentIndex = array.length, temporaryValue, randomIndex;
        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Button pressed");

        console.log("Payload:", { Email: email, Pass: pass });

        try {
            const response = await fetch('https://api-5e1h.onrender.com/medical/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ Email: email, Pass: pass }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error('Error response from server:', errorData);
                throw new Error('Login failed');
            }

            const data = await response.json();
            console.log(data);
            localStorage.setItem('userToken', data.token);
            localStorage.setItem('userRole', data.role);
            setIsLoggedIn(true);
            navigate('/');

        } catch (error) {
            console.error('Login error:', error);
        }
    };

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            if (i < Math.floor(rating)) {
                stars.push(<MdOutlineStarPurple500 key={i} className="star-filled" />);
            } else if (i < rating) {
                stars.push(<MdOutlineStarHalf key={i} className="star-half" />);
            } else {
                stars.push(<MdOutlineStarPurple500 key={i} className="star-empty" />);
            }
        }
        return stars;
    };

    if (!isLoggedIn) {
        return (
            <section className="login-section">
                <div className="login-container">
                    <h2>Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="password">Password:</label>
                            <input
                                type="password"
                                id="password"
                                value={pass}
                                onChange={(e) => setPass(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit">Login</button>
                    </form>
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <div className="singleproduct-main">
                <div className="singleproduct-container">
                    <div className="singleproduct-header">
                        <p>Error fetching product:</p>
                        <p>{error}</p>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }

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
                        <div className="product-description">
                            <h5>Disclaimer</h5>
                            <p>The contents here are for informational purposes only and not intended to be a substitute for professional medical advice, diagnosis, or treatment. Please seek the advice of a physician or other qualified health provider with any questions you may have regarding a medical condition. The content on the Platform should not be considered or used as a substitute for professional and qualified medical advice. Please consult your doctor for any query pertaining to medicines, tests and/or diseases, as we support, and do not replace the doctor-patient relationship.</p>
                        </div>
                         {single ? (
                        <div className="product-review">
                            {renderStars(single.Rating.Review)}
                            <hr />
                            <p>{single.Rating.Review} out of 5 stars</p>
                        </div>
                         ) : (
                            <p>No product details available</p>
                         )}
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
                                <Link to='/ProductComparison'><button onClick={(e) => dispatch(addItem(single))}>+ Compare</button></Link>
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
