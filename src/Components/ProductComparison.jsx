import React from 'react'
import "./ProductComparison.css"
import Navbar from './Layout/Navbar';
import Footer from './Layout/Footer';
import aspirin from "./../assets/aspirin.png"
import { MdKeyboardArrowRight } from "react-icons/md";
import Advertise from './Layout/Advertise';

const ProductComparison = () => {
    return (
        <section className="productcomparison-main">
            {/* <Navbar /> */}
            <div className="productcomparison-container">
                <div className="productcomparison-header">
                    <h2>Product Comparison</h2>
                    <p>Home <MdKeyboardArrowRight />Comparison</p>
                </div>
                <div className="productcomparison-cards">
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
                    <div className="add-product">
                        <h2>Add A Product</h2>
                        <select name="cars" id="cars">
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                        </select>
                    </div>
                </div>
                <div className="productcomparison-related">
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
            </div>
            {/* <Advertise /> */}
            {/* <Footer /> */}
        </section>
    )
}

export default ProductComparison