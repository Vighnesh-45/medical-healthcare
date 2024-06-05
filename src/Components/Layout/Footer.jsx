import React from 'react'
import "./Footer.css"

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
                        <li>Home</li>
                        <li>Order Medicines</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className='help'>
                    <h4>Help</h4>
                    <ul>
                        <li>Payment Options</li>
                        <li>Returns</li>
                        <li>Privacy Policies</li>
                    </ul>
                </div>
                <div className='contact'>
                    <h4>Newsletter</h4>
                    <div className="contact-btn">
                        <input type="email" placeholder="Enter your Email Address" value="" />
                        <button>SUBSCRIBE</button>
                    </div>
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