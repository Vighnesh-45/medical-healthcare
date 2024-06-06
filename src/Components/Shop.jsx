import React from 'react'
import "./Shop.css"
import Navbar from './Layout/Navbar'
import Footer from './Layout/Footer'
import { MdKeyboardArrowRight } from "react-icons/md";
import { VscSettings } from "react-icons/vsc";
import aspirin from "./../assets/aspirin.png"
import Advertise from './Layout/Advertise';

const Shop = () => {
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
                    <div className="card-one">
                        <img src={aspirin} alt="" />
                        <h2>Aspirin</h2>
                        <h4>Stylish cafe Chair</h4>
                        <h3>Rs. 50</h3>
                    </div>
                    <div className="card-one">
                        <img src={aspirin} alt="" />
                        <h2>Aspirin</h2>
                        <h4>Stylish cafe Chair</h4>
                        <h3>Rs. 50</h3>
                    </div>
                    <div className="card-one">
                        <img src={aspirin} alt="" />
                        <h2>Aspirin</h2>
                        <h4>Stylish cafe Chair</h4>
                        <h3>Rs. 50</h3>
                    </div>
                    <div className="card-one">
                        <img src={aspirin} alt="" />
                        <h2>Aspirin</h2>
                        <h4>Stylish cafe Chair</h4>
                        <h3>Rs. 50</h3>
                    </div>
                    <div className="card-one">
                        <img src={aspirin} alt="" />
                        <h2>Aspirin</h2>
                        <h4>Stylish cafe Chair</h4>
                        <h3>Rs. 50</h3>
                    </div>
                    <div className="card-one">
                        <img src={aspirin} alt="" />
                        <h2>Aspirin</h2>
                        <h4>Stylish cafe Chair</h4>
                        <h3>Rs. 50</h3>
                    </div>
                    <div className="card-one">
                        <img src={aspirin} alt="" />
                        <h2>Aspirin</h2>
                        <h4>Stylish cafe Chair</h4>
                        <h3>Rs. 50</h3>
                    </div>
                    <div className="card-one">
                        <img src={aspirin} alt="" />
                        <h2>Aspirin</h2>
                        <h4>Stylish cafe Chair</h4>
                        <h3>Rs. 50</h3>
                    </div>
                    <div className="card-one">
                        <img src={aspirin} alt="" />
                        <h2>Aspirin</h2>
                        <h4>Stylish cafe Chair</h4>
                        <h3>Rs. 50</h3>
                    </div>
                    <div className="card-one">
                        <img src={aspirin} alt="" />
                        <h2>Aspirin</h2>
                        <h4>Stylish cafe Chair</h4>
                        <h3>Rs. 50</h3>
                    </div>
                    <div className="card-one">
                        <img src={aspirin} alt="" />
                        <h2>Aspirin</h2>
                        <h4>Stylish cafe Chair</h4>
                        <h3>Rs. 50</h3>
                    </div>
                    <div className="card-one">
                        <img src={aspirin} alt="" />
                        <h2>Aspirin</h2>
                        <h4>Stylish cafe Chair</h4>
                        <h3>Rs. 50</h3>
                    </div>
                </div>
                <div className="shop-footer">
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button className='next'>Next</button>
                </div>
                {/* <Advertise /> */}
            </div>
            {/* <Footer /> */}
        </section>
    )
}

export default Shop