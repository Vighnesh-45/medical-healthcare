import React from 'react'
import { useNavigate } from "react-router-dom";
import "./ProductComparison.css"
import Navbar from './Layout/Navbar';
import Footer from './Layout/Footer';
import aspirin from "./../assets/aspirin.png"
import { MdKeyboardArrowRight } from "react-icons/md";
import Advertise from './Layout/Advertise';

const ProductComparison = ({ currentStep }) => {
    const navigate = useNavigate();
    function nextpage() {
        navigate('/Cart')
      }
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
                <div className="product-warranty">
                    <div className="warranty-header">
                        <hr />
                        <h2>Warranty</h2>
                    </div>
                    <div className="warranty-table">
                        <table>
                            <tr>
                                <th>Price</th>
                                <td>hi</td>
                                <td>200rs</td>
                            </tr>
                            <tr>
                                <th>Formulation</th>
                                <td>hi</td>
                                <td>200rs</td>
                            </tr>
                            <tr>
                                <th>Manufacturer</th>
                                <td>hi</td>
                                <td>200rs</td>
                            </tr>
                            <tr>
                                <th>Brand vs. Generic</th>
                                <td>hi</td>
                                <td>200rs</td>
                            </tr>
                            <tr>
                                <th>Storage Instructions</th>
                                <td>hi</td>
                                <td>200rs</td>
                            </tr>
                            <tr>
                                <th>Dosage</th>
                                <td>hi</td>
                                <td>200rs</td>
                            </tr>
                            <tr>
                                <th>Disese Category</th>
                                <td>hi</td>
                                <td>200rs</td>
                            </tr>
                            <tr>
                                <th>Effectiveness</th>
                                <td>hi </td>
                                <td>200rs </td>
                                <td></td>
                            </tr>
                            <tr>
                                <th></th>
                                <td><button onClick={nextpage}>Add to Cart</button></td>
                                <td><button onClick={nextpage}>Add to Cart</button></td>
                            </tr>
                        </table>
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