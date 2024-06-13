import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import "./Category.css"
import Navbar from "./../Components/Layout/Navbar"
import Footer from "./../Components/Layout/Footer"
import diabetes from "./../assets/diabetes.png"

const Category = () => {
    const [data, setdata] = useState([])
    const getData = async () => {
        const response = await fetch("https://codify-api-541e.onrender.com/medical/categories/all", {
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
        <section className="category-main">
            <div className="category-container">
                <div className="category-header">
                    <h2>Browse The Categories</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="category-cards">
                    {data.map((res, id) => {
                        console.log(res)
                        return (
                            <>
                                <Link to='/CategoryShop'state={{category:res.Heading}}>
                                    <div className="card-one">
                                        <img src={res.Image} alt="" />
                                        <h2>{res.Heading}</h2>
                                    </div>
                                </Link>
                            </>
                        )
                    })}
                </div>
            </div>
        </section >
    )
}

export default Category