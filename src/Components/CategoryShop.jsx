import React, { useState, useEffect } from 'react'
import "./Shop.css"
import Navbar from './Layout/Navbar'
import Footer from './Layout/Footer'
import { MdKeyboardArrowRight } from "react-icons/md";
import { VscSettings } from "react-icons/vsc";
import aspirin from "./../assets/aspirin.png"
import Advertise from './Layout/Advertise';
import { useLocation } from 'react-router-dom';

const CategoryShop = () => {
    const location = useLocation();
    const { category } = location.state || {};
    const [data, setdata] = useState([]);
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
    useEffect(() => {
        getData();
    }, [])

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
                    {data.map((res, id) => {
                        console.log(res)
                        if(category === res.Categories[0]){
                            return (
                                <>
                                    <div className="card-one">
                                        <img src={res.Image} alt="" />
                                        <h2>{res.Heading}</h2>
                                        <h4>{res.Subheading}</h4>
                                        <h3>Rs. {res.SP}</h3>
                                    </div>
                                </>
                            )
                        }
                    })}
                </div>
                <div className="shop-footer">
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button className='next'>Next</button>
                </div>
                <Advertise />
            </div>
            <Footer />
        </section>
    )
}

export default CategoryShop