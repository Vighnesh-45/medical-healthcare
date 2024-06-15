import React, { useState, useEffect } from 'react';
import "./Shop.css";
import logo from "./../assets/logo.png"
import Navbar from './Layout/Navbar';
import Footer from './Layout/Footer';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowRight } from "react-icons/md";
import { VscSettings } from "react-icons/vsc";
import aspirin from "./../assets/aspirin.png";
import Advertise from './Layout/Advertise';

const Shop = () => {
    const [data, setData] = useState([]);

    const getData = async () => {
        const response = await fetch("https://codify-api-541e.onrender.com/medical/medicine/all", {
            method: "GET",
            headers: {
                "Content-type": "application/json"
            }
        });
        const resData = await response.json();

        if (!resData) {
            console.log("error");
        } else {
            console.log(resData);
            setData(resData);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    const handleAddToCart = (id) => {
        // Get the existing cart items from local storage
        const cart = JSON.parse(localStorage.getItem('cart')) || [];

        // Add the new item to the cart
        cart.push(id);

        // Save the updated cart back to local storage
        localStorage.setItem('cart', JSON.stringify(cart));
    };

    return (
        <section className="shop-main">
            {/* <Navbar /> */}
            <div className="shop-container">
                <div className="shop-header">
                    <img src={logo} alt="" />
                    <h2>Shop
                        <p>Home<MdKeyboardArrowRight />Shop</p>
                    </h2>
                </div>
                <div className="shop-nav">
                    <div className="nav-icons">
                        <VscSettings />
                        <p>Filter</p>
                        <hr />
                        <p>Showing 1–16 of 32 results</p>
                    </div>

                    <div className="shop-nav-right">
                        <div className="nav-btn">
                            <p>Show</p>
                            <input type="number" />
                            <p>Short by</p>
                            <select name="medicine" id="med">
                                <option value="default">Default</option>
                                <option value="saab">Saab</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="shop-cards">
                    {data.map((res, id) => {
                        console.log(res);
                        return (
                            <div className="card-one" key={id}>
                                <img src={res.Image} alt="" />
                                <h2>{res.Heading}</h2>
                                <h4>{res.Subheading}</h4>
                                <h3>Rs. {res.SP}</h3>
                                <Link to="/Cart">
                                    <button onClick={() => handleAddToCart(res._id)}>Add to Cart</button>
                                </Link>
                            </div>
                        );
                    })}
                </div>
                <div className="shop-footer">
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button className='next'>Next</button>
                </div>
                <Advertise />
            </div>
            <Footer />
        </section>
    );
}

export default Shop;
