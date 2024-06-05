import React from 'react'
import "./Spotlight.css"
import rightarrow from "./../assets/right-arrow.png"
import aspirin from "./../assets/aspirin.png"

const Spotlight = () => {
    return (
        <section className="spotlight-main">
            <div className="spotlight-container">
                <div className="spotlight-header">
                    <h2>In The Spotlight</h2>
                    <div className="spotlight-right-header">
                        <button>View All<img src={rightarrow} /></button>
                    </div>
                </div>
                <div className="spotlight-cards">
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
        </section>
    )
}

export default Spotlight