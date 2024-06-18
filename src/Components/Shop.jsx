import React, { useState, useEffect } from 'react';
import "./Shop.css";
import logo from "./../assets/logo.png";
import Navbar from './Layout/Navbar';
import Footer from './Layout/Footer';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowRight } from "react-icons/md";
import { VscSettings } from "react-icons/vsc";
import Advertise from './Layout/Advertise';

const Shop = () => {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

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
            setTotalPages(Math.ceil(resData.length / 12));
        }
    };

    useEffect(() => {
        getData();
    }, []);

    const handleAddToCart = (id) => {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(id);
        localStorage.setItem('cart', JSON.stringify(cart));
    };

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const getPaginatedData = () => {
        const startIndex = (currentPage - 1) * 12;
        const endIndex = startIndex + 12;
        return data.slice(startIndex, endIndex);
    };

    return (
        <section className="shop-main">
            <Navbar />
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
                        <p>Showing {((currentPage - 1) * 12) + 1}–{Math.min(currentPage * 12, data.length)} of {data.length} results</p>
                    </div>

                    <div className="shop-nav-right">
                        <div className="nav-btn">
                            <p>Show</p>
                            <input type="number" />
                            <p>Sort by</p>
                            <select name="medicine" id="med">
                                <option value="low">Price: Low to High</option>
                                <option value="high">Price: High to Low</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="shop-cards">
                    {getPaginatedData().map((res, id) => (
                        <div className="card-one" key={id}>
                            <img src={res.Image} alt="" />
                            <h2>{res.Heading}</h2>
                            <h4>{res.Subheading}</h4>
                            <h3>Rs. {res.SP}</h3>
                            <Link to="/Cart">
                                <button onClick={() => handleAddToCart(res._id)}>Add to Cart</button>
                            </Link>
                        </div>
                    ))}
                </div>
                <div className="shop-footer">
                    {totalPages >= 1 && (
                        <button
                            onClick={() => handlePageChange(1)}
                            className={currentPage === 1 ? 'active' : ''}
                        >
                            1
                        </button>
                    )}
                    {totalPages >= 2 && (
                        <button
                            onClick={() => handlePageChange(2)}
                            className={currentPage === 2 ? 'active' : ''}
                        >
                            2
                        </button>
                    )}
                    <button
                        className='next'
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage >= totalPages}
                    >
                        Next
                    </button>
                </div>
                <Advertise />
            </div>
            <Footer />
        </section>
    );
}

export default Shop;
