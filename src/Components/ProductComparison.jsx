import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import "./ProductComparison.css";
import Footer from './Layout/Footer';
import { MdKeyboardArrowRight } from "react-icons/md";
import Advertise from './Layout/Advertise';
import logo from "./../assets/logo.png";

const ProductComparison = ({ addToCart }) => {
    const items = useSelector(state => state.compare); // Adjusted to access the compare slice
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [singleData, setSingleData] = useState({});

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleAddToCart = (product) => {
        addToCart(product);
        navigate('/cart');
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
            const response = await fetch("https://api-5e1h.onrender.com                / medical / medicine / all", {
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
            const response = await fetch("https://api-5e1h.onrender.com            / medical / medicine / get / 66680fc57adcf1ef853da05f", {
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
                            <option value="cat">Category</option>
                        </select>
                    </div>
                    {items.map((res, id) => (
                        <div className="card-one" key={id}>
                            <img src={res.Image} alt="" />
                            <h2>{res.Heading}</h2>
                            <h3>Rs. {res.SP}</h3>
                        </div>
                    ))}
                </div>
                <div className="product-warranty">
                    <div className="warranty-header">
                        <hr />
                        <h2>Product Comparison</h2>
                    </div>
                    <div className="warranty-table">
                        <table>
                            <tbody>
                                <tr>
                                    <th>Price</th>
                                    {items.map((data, id) => (
                                        <td key={id}>Rs. {data.SP}</td>
                                    ))}
                                </tr>
                                <tr>
                                    <th>Formulation</th>
                                    {items.map((data, id) => (
                                        <td key={id}>{data.Formulation}</td>
                                    ))}
                                </tr>
                                <tr>
                                    <th>Manufacturer</th>
                                    {items.map((data, id) => (
                                        <td key={id}>{data.Manufacturer}</td>
                                    ))}
                                </tr>
                                <tr>
                                    <th>Brand vs. Generic</th>
                                    {items.map((data, id) => (
                                        <td key={id}>{data.Brand ? "Brand" : "Generic"}</td>
                                    ))}
                                </tr>
                                <tr>
                                    <th>Storage Instructions</th>
                                    {items.map((data, id) => (
                                        <td key={id}>{data.Storage}</td>
                                    ))}
                                </tr>
                                <tr>
                                    <th>Dosage</th>
                                    {items.map((data, id) => (
                                        <td key={id}>{data.Dosage}</td>
                                    ))}
                                </tr>
                                <tr>
                                    <th>Disease Category</th>
                                    {items.map((data, id) => (
                                        <td key={id}>{data.Disease}</td>
                                    ))}
                                </tr>
                                {/* <tr>
                                    <th>Effectiveness</th>
                                    {items.map((data, id) => (
                                        <td key={id}>{data.Effectiveness}</td>
                                    ))}
                                </tr> */}
                                <tr>
                                    <th>Add to Cart</th>
                                    {items.map((data, id) => (
                                        <td key={id}><button onClick={(e) => { e.stopPropagation(); handleAddToCart(data); }}>Add to Cart</button></td>
                                    ))}
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
