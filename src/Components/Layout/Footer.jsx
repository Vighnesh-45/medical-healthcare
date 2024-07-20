import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <section className="footer-main">
            <div className="footer-container">
                <div className='medicine'>
                    <h2>Medicine</h2>
                    <p>400 University Drive Suite 200 Coral
                        Gables,</p>
                    <p>FL 33134 USA</p>
                </div>
                <div className='links'>
                    <h4>Links</h4>
                    <ul>
                        <Link to="/"><li>Home</li></Link>
                        <Link to="/Shop"><li>Order Medicine</li></Link>
                        <Link to="/Contact"><li>Contact</li></Link>
                    </ul>
                </div>
                <div className='help'>
                    <h4>Help</h4>
                    <ul>
                        <Link to="/"><li>Payment Option</li></Link>
                        <Link to="/"><li>Returns</li></Link>
                        <Link to="/"><li>Privacy Policies</li></Link>
                    </ul>
                </div>
            </div>
            <hr />
            <div className="right-reserved">
                <p>2023 furino. All rights reverved</p>
            </div>
        </section>
    )
}

export default Footer