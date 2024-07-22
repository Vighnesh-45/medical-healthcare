import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Shop.css";
import logo from "./../assets/logo.png";
import Footer from './Layout/Footer';
import { MdKeyboardArrowRight } from "react-icons/md";
import { VscSettings } from "react-icons/vsc";
import Advertise from './Layout/Advertise';

const Shop = ({ cart, addToCart, addToSingle }) => {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [sortOption, setSortOption] = useState('default');
    const [itemsPerPage, setItemsPerPage] = useState(12);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [ratingFilter, setRatingFilter] = useState('');
    const [priceFilter, setPriceFilter] = useState({ min: '', max: '' });
    const [genericBrandFilter, setGenericBrandFilter] = useState('');
    const [formulationFilter, setFormulationFilter] = useState('');
    const [companyNameFilter, setCompanyNameFilter] = useState('');
    const navigate = useNavigate();

    const getData = async () => {
        try {
            const response = await fetch("https://api-5e1h.onrender.com/medical/medicine/all", {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            });
            const resData = await response.json();
            if (resData) {
                setData(resData);
                setTotalPages(Math.ceil(resData.length / itemsPerPage));
            } else {
                console.log("No data found");
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        getData();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [itemsPerPage]);

    const handleAddToCart = (product) => {
        addToCart(product);
        navigate('/cart');
    };

    const handleSingleProduct = (product) => {
        addToSingle(product);
        navigate(`/singleproduct/${product._id}`);
    };

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const handleSortChange = (event) => {
        setSortOption(event.target.value);
    };

    const handleItemsPerPageChange = (event) => {
        const value = parseInt(event.target.value, 10);
        if (!isNaN(value) && value > 0) {
            setItemsPerPage(value);
            setCurrentPage(1);
            setTotalPages(Math.ceil(data.length / value));
        }
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

    const getPaginatedData = () => {
        let sortedData = [...data];

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
            sortedData = sortedData.filter(item => item.Formulation === formulationFilter);
        }

        if (companyNameFilter) {
            sortedData = sortedData.filter(item => item.Manufacturer.toLowerCase().includes(companyNameFilter.toLowerCase()));
        }

        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return sortedData.slice(startIndex, endIndex);
    };

    return (
        <section className="shop-main">
            <div className="shop-container">
                <div className="shop-header">
                    <img src={logo} alt="" />
                    <h2>Shop
                        <p>Home<MdKeyboardArrowRight className='right-arrow'/>Shop</p>
                    </h2>
                </div>
                <div className="shop-nav">
                    <div className="nav-icons" onClick={handleFilterButtonClick}>
                        <VscSettings className='filter-icon'/>
                        <p>Filter</p>
                        <hr />
                        <p>Showing {((currentPage - 1) * itemsPerPage) + 1}–{Math.min(currentPage * itemsPerPage, data.length)} of {data.length} results</p>
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
                    {getPaginatedData().map((res, id) => (
                        <div onClick={() => handleSingleProduct(res)} className="card-one" key={id}>
                            <img src={res.Image} alt="" />
                            <h2>{res.Heading}</h2>
                            <h4>{res.Subheading}</h4>
                            <h3>Rs. {res.SP}</h3>
                            <button onClick={(e) => { e.stopPropagation(); handleAddToCart(res); }}>Add to Cart</button>
                        </div>
                    ))}
                </div>
                <div className="shop-footer">
                    {[1, 2, 3].map((page) => (
                        <button
                            key={page}
                            onClick={() => handlePageChange(page)}
                            className={currentPage === page ? 'active' : ''}
                            disabled={page > totalPages}
                        >
                            {page}
                        </button>
                    ))}
                    {currentPage < totalPages && (
                        <button
                            className='next'
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage >= totalPages}
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
                                        <option value="1">1 & up</option>
                                        <option value="2">2 & up</option>
                                        <option value="3">3 & up</option>
                                        <option value="4">4 & up</option>
                                        <option value="5">5</option>
                                    </select>
                                </div>
                                <div className="filter-option">
                                    <label htmlFor="minPrice">Min Price:</label>
                                    <input
                                        type="number"
                                        id="minPrice"
                                        name="min"
                                        value={priceFilter.min}
                                        onChange={handlePriceChange}
                                    />
                                </div>
                                <div className="filter-option">
                                    <label htmlFor="maxPrice">Max Price:</label>
                                    <input
                                        type="number"
                                        id="maxPrice"
                                        name="max"
                                        value={priceFilter.max}
                                        onChange={handlePriceChange}
                                    />
                                </div>
                                <div className="filter-option">
                                    <label htmlFor="genericBrand">Generic/Brand:</label>
                                    <select id="genericBrand" value={genericBrandFilter} onChange={handleGenericBrandChange}>
                                        <option value="">All</option>
                                        <option value="generic">Generic</option>
                                        <option value="brand">Brand</option>
                                    </select>
                                </div>
                                <div className="filter-option">
                                    <label htmlFor="formulation">Formulation:</label>
                                    <input
                                        type="text"
                                        id="formulation"
                                        value={formulationFilter}
                                        onChange={handleFormulationChange}
                                    />
                                </div>
                                <div className="filter-option">
                                    <label htmlFor="companyName">Company Name:</label>
                                    <input
                                        type="text"
                                        id="companyName"
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

export default Shop;
