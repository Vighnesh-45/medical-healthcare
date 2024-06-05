import React from 'react'
import "./Trending.css"
import rightarrow from "./../assets/right-arrow.png"
import aspirin from "./../assets/aspirin.png"

const Trending = () => {
    return (
        <section className="trending-main">
            <div className="trending-container">
                <div className="trending-header">
                    <h2>Top Trending Products</h2>
                    <div className="trending-right-header">
                        <button>View All<img src={rightarrow} /></button>
                    </div>
                </div>
                <div className="trending-cards">
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
                <div className="show-button">
                    <button>Show More</button>
                </div>
            </div>
        </section>
    )
}

export default Trending