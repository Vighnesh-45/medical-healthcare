import React from 'react'
import "./Profile.css"
import { MdKeyboardArrowRight } from "react-icons/md";
import Navbar from './Layout/Navbar';
import Footer from './Layout/Footer';
import Advertise from './Layout/Advertise';


const Profile = () => {
    return (
        <section className="profile-main">
            <Navbar/>
            <div className="profile-container">
                <div className="profile-header">
                    <h2>Profile
                        <p>Home<MdKeyboardArrowRight />Profile</p>
                    </h2>
                </div>
                <div className="address-section">
                    <h2>Add Address</h2>
                    <div className="name-input">
                        <label htmlFor="">Name</label>
                        <input type="text" />
                    </div>
                    <div className="mobile-input">
                        <label htmlFor="">Mobile Number</label>
                        <input type="text" placeholder='+91' />
                        <label htmlFor="">Alternative Mobile Number(optional)</label>
                        <input type="text" placeholder='+91' />
                    </div>
                    <div className="land-input">
                        <label htmlFor="">Landmark (optional)</label>
                        <input type="text" />
                    </div>
                    <div className="city-input">
                        <label htmlFor="">Pincode</label>
                        <input type="text" />
                        <label htmlFor="">City</label>
                        <input type="text" />
                    </div>
                    <div className="state-tag">
                        <label htmlFor="">State</label>
                        <input type="text" />
                        <label htmlFor="">Tags</label>
                        <button>Home</button>
                        <button>Work</button>
                        <button>Others</button>
                    </div>
                    <div className="default-address">
                        <input type="checkbox" />
                        <label htmlFor="">Use this as my default shipping address</label>
                    </div>
                </div>
            </div>
            <Advertise/>
            <Footer/>
        </section>
    )
}

export default Profile