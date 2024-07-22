import React, { useState, useEffect } from 'react';
import "./Shop.css";
import logo from "./../assets/logo.png";
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
    const [itemsPerPage, setItemsPerPage] = useState(12);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [ratingFilter, setRatingFilter] = useState('');
    const [priceFilter, setPriceFilter] = useState({ min: '', max: '' });
    const [genericBrandFilter, setGenericBrandFilter] = useState('');
    const [formulationFilter, setFormulationFilter] = useState('');
    const [companyNameFilter, setCompanyNameFilter] = useState('');

    const getData = async () => {
        const response = await fetch("https://api-5e1h.onrender.com/medical/medicine/all", {
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

    useEffect(() => {
        setCurrentPage(1);
    }, [itemsPerPage]);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    // Filter and sort data
    const filteredData = data.filter(item => item.Categories.includes(category));
    let sortedData = [...filteredData];

    if (sortOption === 'low') {
        sortedData.sort((a, b) => a.SP - b.SP);
    } else if (sortOption === 'high') {
        sortedData.sort((a, b) => b.SP - a.SP);
    }

    if (ratingFilter) {
        sortedData = sortedData.filter(item => item.Rating >= ratingFilter);
    }

    if (priceFilter.min || priceFilter.max) {
        sortedData = sortedData.filter(item => {
            const price = item.SP;
            const min = priceFilter.min ? parseFloat(priceFilter.min) : 0;
            const max = priceFilter.max ? parseFloat(priceFilter.max) : Infinity;
            return price >= min && price <= max;
        });
    }

    if (genericBrandFilter) {
        sortedData = sortedData.filter(item => item.Type === genericBrandFilter);
    }

    if (formulationFilter) {
        sortedData = sortedData.filter(item => item.Formulation.toLowerCase().includes(formulationFilter.toLowerCase()));
    }

    if (companyNameFilter) {
        sortedData = sortedData.filter(item => item.CompanyName.toLowerCase().includes(companyNameFilter.toLowerCase()));
    }

    // Calculate the index range of the current page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = sortedData.slice(indexOfFirstItem, indexOfLastItem);

    // Handle page change
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const totalPages = Math.ceil(filteredData.length / itemsPerPage);

    // Handle sort change
    const handleSortChange = (event) => {
        setSortOption(event.target.value);
    };

    // Handle items per page change
    const handleItemsPerPageChange = (event) => {
        const value = parseInt(event.target.value, 10);
        if (!isNaN(value) && value > 0) {
            setItemsPerPage(value);
        }
    };

    // Handle add to cart and redirect to cart page
    const redirectToSingleProduct = (res) => {
        navigate(`/SingleProduct/${res._id}`);
    };

    const handleAddToCart = (product) => {
        addToCart(product);
        navigate('/cart');
    };

    const handleFilterButtonClick = () => {
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    const handleApplyFilters = () => {
        setCurrentPage(1);
        setIsModalOpen(false);
    };

    const handleRatingChange = (event) => {
        setRatingFilter(event.target.value);
    };

    const handlePriceChange = (event) => {
        const { name, value } = event.target;
        setPriceFilter((prevPriceFilter) => ({
            ...prevPriceFilter,
            [name]: value
        }));
    };

    const handleGenericBrandChange = (event) => {
        setGenericBrandFilter(event.target.value);
    };

    const handleFormulationChange = (event) => {
        setFormulationFilter(event.target.value);
    };

    const handleCompanyNameChange = (event) => {
        setCompanyNameFilter(event.target.value);
    };

    return (
        <section className="shop-main">
            <div className="shop-container">
                <div className="shop-header">
                    <img src={logo} alt="" />
                    <h2>Category Shop
                        <p>Home<MdKeyboardArrowRight />Shop</p>
                    </h2>
                </div>
                <div className="shop-nav">
                    <div className="nav-icons" onClick={handleFilterButtonClick}>
                        <VscSettings />
                        <p>Filter</p>
                        <hr />
                        <p>Showing {indexOfFirstItem + 1}–{Math.min(indexOfLastItem, filteredData.length)} of {filteredData.length} results</p>
                    </div>

                    <div className="shop-nav-right">
                        <div className="nav-btn">
                            <p>Show</p>
                            <input
                                type="number"
                                value={itemsPerPage}
                                onChange={handleItemsPerPageChange}
                            />
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
                            <button onClick={(e) => { e.stopPropagation(); handleAddToCart(res); }}>Add to Cart</button>
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
                {isModalOpen && (
                    <div className="modal">
                        <div className="modal-content">
                            <span className="close" onClick={handleModalClose}>&times;</span>
                            <h2>Filters</h2>
                            <div className="filter-options">
                                <div className="filter-option">
                                    <label htmlFor="rating">Rating:</label>
                                    <select id="rating" value={ratingFilter} onChange={handleRatingChange}>
                                        <option value="">All</option>
                                        <option value="1">1 Star & Up</option>
                                        <option value="2">2 Stars & Up</option>
                                        <option value="3">3 Stars & Up</option>
                                        <option value="4">4 Stars & Up</option>
                                        <option value="5">5 Stars</option>
                                    </select>
                                </div>
                                <div className="filter-option">
                                    <label htmlFor="price-min">Price Range:</label>
                                    <input
                                        type="number"
                                        id="price-min"
                                        name="min"
                                        placeholder="Min"
                                        value={priceFilter.min}
                                        onChange={handlePriceChange}
                                    /> <br />
                                    <input
                                        type="number"
                                        id="price-max"
                                        name="max"
                                        placeholder="Max"
                                        value={priceFilter.max}
                                        onChange={handlePriceChange}
                                    />
                                </div>
                                <div className="filter-option">
                                    <label htmlFor="generic-brand">Generic vs Brand:</label>
                                    <select id="generic-brand" value={genericBrandFilter} onChange={handleGenericBrandChange}>
                                        <option value="">All</option>
                                        <option value="Generic">Generic</option>
                                        <option value="Brand">Brand</option>
                                    </select>
                                </div>
                                <div className="filter-option">
                                    <label htmlFor="formulation">Formulation:</label>
                                    <input
                                        type="text"
                                        id="formulation"
                                        placeholder="e.g., Tablet, Syrup"
                                        value={formulationFilter}
                                        onChange={handleFormulationChange}
                                    />
                                </div>
                                <div className="filter-option">
                                    <label htmlFor="company-name">Company Name:</label>
                                    <input
                                        type="text"
                                        id="company-name"
                                        placeholder="Company Name"
                                        value={companyNameFilter}
                                        onChange={handleCompanyNameChange}
                                    />
                                </div>
                            </div>
                            <button onClick={handleApplyFilters}>Apply Filters</button>
                        </div>
                    </div>
                )}
                <Advertise />
            </div>
            <Footer />
        </section>
    );
};

export default CategoryShop;
