import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import "./ProductComparison.css";
import Navbar from './Layout/Navbar';
import Footer from './Layout/Footer';
import aspirin from "./../assets/aspirin.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import Advertise from './Layout/Advertise';
import logo from "./../assets/logo.png";

const ProductComparison = ({ currentStep }) => {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [singleData, setSingleData] = useState({});

    const nextpage = () => {
        navigate('/Cart');
    };

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    const getData = async () => {
        try {
            const response = await fetch("https://api-k7vh.onrender.com/medical/medicine/all", {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            });
            const resData = await response.json();
            if (response.ok) {
                const shuffledData = shuffleArray(resData);
                setData(shuffledData);
            } else {
                console.log("Error fetching data");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const getSingleData = async () => {
        try {
            const response = await fetch("https://api-k7vh.onrender.com/medical/medicine/get/66680fc57adcf1ef853da05f", {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            });
            const resData = await response.json();
            if (response.ok) {
                setSingleData(resData);
            } else {
                console.log("Error fetching single data");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    useEffect(() => {
        getData();
        getSingleData();
    }, []);

    return (
        <section className="productcomparison-main">
            {/* <Navbar /> */}
            <div className="productcomparison-container">
                <div className="productcomparison-header">
                    <img src={logo} alt="" />
                    <h2>Product Comparison</h2>
                    <p>Home <MdKeyboardArrowRight />Comparison</p>
                </div>
                <div className="productcomparison-cards">
                    <div className="add-product">
                        <h2>Add A Product</h2>
                        <select name="products" id="products">
                            <option value="def">Default</option>
                            <option value="">Categories</option>
                        </select>
                    </div>
                    {data.slice(0, 2).map((res, id) => (
                        <div className="card-one" key={id}>
                            <img src={res.Image} alt="" />
                            <p>{res.Heading}</p>
                            <p>Rs. {res.SP}</p>
                        </div>
                    ))}
                </div>
                <div className="product-warranty">
                    <div className="warranty-header">
                        <hr />
                        <h2>Warranty</h2>
                    </div>
                    <div className="warranty-table">
                        <table>
                            <tbody>
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
                                    <th>Disease Category</th>
                                    <td>{singleData.Disease}</td>
                                    <td>{singleData.Disease}</td>
                                </tr>
                                <tr>
                                    <th>Effectiveness</th>
                                    <td>{singleData.Disease}</td>
                                    <td>{singleData.Disease}</td>
                                </tr>
                                <tr>
                                    <th></th>
                                    <td><button onClick={nextpage}>Add to Cart</button></td>
                                    <td><button onClick={nextpage}>Add to Cart</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <h2>Related Products</h2>
                <div className="productcomparison-related">
                    {data.slice(0, 4).map((res, id) => (
                        <div className="card-one" key={id}>
                            <img src={res.Image} alt="" />
                            <p>{res.Heading}</p>
                            <p>Rs. {res.SP}</p>
                        </div>
                    ))}
                </div>
            </div>
            <Advertise />
            <Footer />
        </section>
    );
}

export default ProductComparison;
