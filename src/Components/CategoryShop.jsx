import React, { useState, useEffect } from 'react';
import "./Shop.css";
import Navbar from './Layout/Navbar';
import Footer from './Layout/Footer';
import { MdKeyboardArrowRight } from "react-icons/md";
import { VscSettings } from "react-icons/vsc";
import Advertise from './Layout/Advertise';
import { useLocation } from 'react-router-dom';

const CategoryShop = () => {
    const location = useLocation();
    const { category } = location.state || {};
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;

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

    // Calculate the index range of the current page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    // Handle page change
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <section className="shop-main">
            {/* <Navbar /> */}
            <div className="shop-container">
                <div className="shop-header">
                    <h2>Shop
                        <p>Home<MdKeyboardArrowRight />Shop</p>
                    </h2>
                </div>
                <div className="shop-nav">
                    <div className="nav-icons">
                        <VscSettings />
                        <p>Filter</p>
                        <hr />
                        <p>Showing {indexOfFirstItem + 1}–{Math.min(indexOfLastItem, data.length)} of {data.length} results</p>
                    </div>

                    <div className="shop-nav-right">
                        <div className="nav-btn">
                            <p>Show</p>
                            <input type="number" />
                            <p>Sort by</p>
                            <select name="medicine" id="med">
                                <option value="default">Default</option>
                                <option value="saab">Saab</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="shop-cards">
                    {currentItems.map((res, id) => {
                        console.log(res);
                        if (category === res.Categories[0]) {
                            return (
                                <div className="card-one" key={id}>
                                    <img src={res.Image} alt="" />
                                    <h2>{res.Heading}</h2>
                                    <h4>{res.Subheading}</h4>
                                    <h3>Rs. {res.SP}</h3>
                                </div>
                            );
                        }
                        return null;
                    })}
                </div>
                <div className="shop-footer">
                    {[...Array(Math.ceil(data.length / itemsPerPage)).keys()].map(number => (
                        <button key={number} onClick={() => paginate(number + 1)}>
                            {number + 1}
                        </button>
                    ))}
                </div>
                <Advertise />
            </div>
            <Footer />
        </section>
    );
};

export default CategoryShop;
