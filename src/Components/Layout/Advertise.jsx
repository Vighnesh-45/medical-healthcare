import React from 'react'
import "./Advertise.css"
import { GoTrophy } from "react-icons/go";
import { GoVerified } from "react-icons/go";
import { MdInventory } from "react-icons/md";
import { FcCustomerSupport } from "react-icons/fc";

const Advertise = () => {
    return (
        <section className="advertise-main">
            <div className="advertise-container">
                <div className="advertise-content">
                    <div className="content1">
                        <h2><GoTrophy />High Quality</h2>
                        <p>crafted from top materials</p>
                    </div>
                </div>
                <div className="advertise-content">
                    <div className="content1">
                        <h2><GoVerified />Warranty Protection</h2>
                        <p>Over 2 Years</p>
                    </div>
                </div>
                <div className="advertise-content">
                    <div className="content1">
                        <h2><MdInventory />Free Shipping</h2>
                        <p>Order over 150 $</p>
                    </div>
                </div>
                <div className="advertise-content">
                    <div className="content1">
                        <h2><FcCustomerSupport />24 / 7 Support</h2>
                        <p>Dedicated support</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Advertise