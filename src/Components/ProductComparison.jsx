import { useState, useEffect } from 'react'
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

    const [data, setdata] = useState([]);
    const [singleData, setsingledata] = useState({});
    const getData = async () => {
        const response = await fetch("https://codify-api-541e.onrender.com/medical/medicine/all", {
            method: "GET",
            header: {
                "Content-type": "application/json"
            }
        })
        const resdata = await response.json();

        if (!resdata) {
            console.log("error")
        } else {
            console.log(resdata)
            setdata(resdata);
        }
    }
    const getSingleData = async () => {
        const response = await fetch("https://codify-api-541e.onrender.com/medical/medicine/get/6661ee43ed59d50902896461", {
            method: "GET",
            header: {
                "Content-type": "application/json"
            }
        })
        const resdata = await response.json();

        if (!resdata) {
            console.log("error")
        } else {
            console.log(resdata)
            setsingledata(resdata);
        }
    }
    useEffect(() => {
        getData();
        getSingleData();
    }, [])
    return (
        <section className="productcomparison-main">
            {/* <Navbar /> */}
            <div className="productcomparison-container">
                <div className="productcomparison-header">
                    <h2>Product Comparison</h2>
                    <p>Home <MdKeyboardArrowRight />Comparison</p>
                </div>
                <div className="productcomparison-cards">
                    {data.map((res, id) => {
                        console.log(res)
                        return (
                            <>
                                <div className="card-one">
                                    <img src={res.Image} alt="" />
                                    <h1>{res.Heading}</h1>
                                    <h4>{res.Subheading}</h4>
                                    <h3>{res.SP}</h3>
                                </div>
                            </>
                        )
                    })}
                    {/* <div className="card-one">
                        <img src={aspirin} alt="" />
                        <h2>Aspirin</h2>
                        <h4>Stylish cafe Chair</h4>
                        <h3>Rs. 50</h3>
                    </div> */}
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
                                <td>{singleData.SP}</td>
                                <td>{singleData.SP}</td>
                            </tr>
                            <tr>
                                <th>Formulation</th>
                                <td>{singleData.Formulation}</td>
                                <td>{singleData.Formulation}</td>
                            </tr>
                            <tr>
                                <th>Manufacturer</th>
                                <td>{singleData.Manufacturer}</td>
                                <td>{singleData.Manufacturer}</td>
                            </tr>
                            <tr>
                                <th>Brand vs. Generic</th>
                                <td>{singleData.Brand}</td>
                                <td>{singleData.Brand}</td>
                            </tr>
                            <tr>
                                <th>Storage Instructions</th>
                                <td>{singleData.Storage}</td>
                                <td>{singleData.Storage}</td>
                            </tr>
                            <tr>
                                <th>Dosage</th>
                                <td>{singleData.Dosage}</td>
                                <td>{singleData.Dosage}</td>
                            </tr>
                            <tr>
                                <th>Disese Category</th>
                                <td>{singleData.Disease}</td>
                                <td>{singleData.Disease}</td>
                            </tr>
                            <tr>
                                <th>Effectiveness</th>
                                <td>{singleData.Rating.Review}</td>
                                <td>{singleData.Rating.Review}</td>
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
                <h2>Related Products</h2>
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