import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import "./Category.css"

const Category = () => {
    const [data, setData] = useState([])
    
    const getData = async () => {
        const response = await fetch("https://api-5e1h.onrender.com/medical/categories/all", {
            method: "GET",
            headers: {
                "Content-type": "application/json"
            }
        })
        const resData = await response.json()

        if (!resData) {
            console.log("error")
        } else {
            console.log(resData)
            setData(resData)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <section className="category-main">
            <div className="category-container">
                <div className="category-header">
                    <h6>Browse The Categories</h6>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="category-cards">
                    {data.map((res, id) => {
                        return (
                            <Link to='/CategoryShop' state={{ category: res.Heading }} key={id}>
                                <div className="card-one">
                                    <img src={res.Image} alt={res.Heading} />
                                    <h2>{res.Heading}</h2>
                                    <button>{res.Heading}</button>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Category
