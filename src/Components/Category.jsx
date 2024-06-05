import React from 'react'
import "./Category.css"
import diabetes from "./../assets/diabetes.png"

const Category = () => {
  return (
    <section className="category-main">
        <div className="category-container">
            <div className="category-header">
                <h2>Browse The Categories</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="category-cards">
                <div className="card1">
                    <img src= {diabetes} alt="" />
                    <p>Diabetes</p>
                </div>
                <div className="card1">
                    <img src= {diabetes} alt="" />
                    <p>Nutritional Supplements</p>
                </div>
                <div className="card1">
                    <img src= {diabetes} alt="" />
                    <p>Ayurvedic Products</p>
                </div>
                <div className="card1">
                    <img src= {diabetes} alt="" />
                    <p>Eye Care Products</p>
                </div>
                <div className="card1">
                    <img src= {diabetes} alt="" />
                    <p>Elderly Care</p>
                </div>
                <div className="card1">
                    <img src= {diabetes} alt="" />
                    <p>Health Care Devices</p>
                </div>
                <div className="card1">
                    <img src= {diabetes} alt="" />
                    <p>Cough & Cold</p>
                </div>
                <div className="card1">
                    <img src= {diabetes} alt="" />
                    <p>Heart Care</p>
                </div>
                <div className="card1">
                    <img src= {diabetes} alt="" />
                    <p>Blood Pressure</p>
                </div>
                <div className="card1">
                    <img src= {diabetes} alt="" />
                    <p>Personal Care</p>
                </div>
                <div className="card1">
                    <img src= {diabetes} alt="" />
                    <p>Kidney Care</p>
                </div>
                <div className="card1">
                    <img src= {diabetes} alt="" />
                    <p>Newly Launched Generic Medicines</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Category