import React, { useState, useEffect } from 'react';
import "./Shop.css";
import logo from "./../assets/logo.png";
import Navbar from './Layout/Navbar';
import Footer from './Layout/Footer';
import { MdKeyboardArrowRight } from "react-icons/md";
import { VscSettings } from "react-icons/vsc";
import Advertise from './Layout/Advertise';
import { useLocation, useNavigate } from 'react-router-dom';

const CategoryShop = ({ addToCart }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const { category } = location.state || {};
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [sortOption, setSortOption] = useState('default');
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

    // Filter and sort data
    const filteredData = data.filter(item => item.Categories.includes(category));
    const sortedData = [...filteredData];

    if (sortOption === 'low') {
        sortedData.sort((a, b) => a.SP - b.SP);
    } else if (sortOption === 'high') {
        sortedData.sort((a, b) => b.SP - a.SP);
    }

    // Calculate the index range of the current page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = sortedData.slice(indexOfFirstItem, indexOfLastItem);

    // Handle page change
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const totalPages = Math.ceil(filteredData.length / itemsPerPage);

    // Handle sort change
    const handleSortChange = (event) => {
        setSortOption(event.target.value);
    };

    // Handle add to cart and redirect to cart page
    const redirectToSingleProduct = (product) => {
        navigate('/SingleProduct', { state: { productId: product.id } });
    };

    return (
        <section className="shop-main">
            <Navbar />
            <div className="shop-container">
                <div className="shop-header">
                    <img src={logo} alt="" />
                    <h2>Category Shop
                        <p>Home<MdKeyboardArrowRight />Shop</p>
                    </h2>
                </div>
                <div className="shop-nav">
                    <div className="nav-icons">
                        <VscSettings />
                        <p>Filter</p>
                        <hr />
                        <p>Showing {indexOfFirstItem + 1}–{Math.min(indexOfLastItem, filteredData.length)} of {filteredData.length} results</p>
                    </div>

                    <div className="shop-nav-right">
                        <div className="nav-btn">
                            <p>Show</p>
                            <input type="number" />
                            <p>Sort by</p>
                            <select name="medicine" id="med" value={sortOption} onChange={handleSortChange}>
                                <option value="default">Default</option>
                                <option value="low">Price: Low to High</option>
                                <option value="high">Price: High to Low</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="shop-cards">
                    {currentItems.map((res, id) => (
                        <div className="card-one" key={id} onClick={() => redirectToSingleProduct(res)}>
                            <img src={res.Image} alt="" />
                            <h2>{res.Heading}</h2>
                            <h4>{res.Subheading}</h4>
                            <h3>Rs. {res.SP}</h3>
                            <button onClick={(e) => { e.stopPropagation(); addToCart(res); }}>Add to Cart</button>
                        </div>
                    ))}
                </div>
                <div className="shop-footer">
                    {totalPages > 0 && (
                        <button
                            onClick={() => paginate(1)}
                            className={currentPage === 1 ? 'active' : ''}
                        >
                            1
                        </button>
                    )}
                    {totalPages > 1 && (
                        <button
                            onClick={() => paginate(2)}
                            className={currentPage === 2 ? 'active' : ''}
                        >
                            2
                        </button>
                    )}
                    {totalPages > 2 && (
                        <button
                            onClick={() => paginate(3)}
                            className={currentPage === 3 ? 'active' : ''}
                        >
                            3
                        </button>
                    )}
                    {currentPage < totalPages && (
                        <button
                            onClick={() => paginate(currentPage + 1)}
                            className='next'
                        >
                            Next
                        </button>
                    )}
                </div>
                <Advertise />
            </div>
            <Footer />
        </section>
    );
};

export default CategoryShop;
