import React from 'react'
import "./Contact.css"
import Navbar from './Layout/Navbar'
import Footer from './Layout/Footer'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineAccessTime } from "react-icons/md";


const Contact = () => {
    return (
        <section className='contact-main'>
            <Navbar />
            <div className="contact-container">
                <div className="contact-header">
                    <h2>Contact</h2>
                </div>
                <div className="contact-content">
                    <div className="contact-content-header">
                        <h2>Get In Touch With Us</h2>
                        <p>For More Information About Our Product & Services. Please Feel Free To Drop Us</p>
                        <p>An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
                    </div>
                    <div className="conatct-content-main">  
                        <div className="contact-content-left">
                            <div className="contact-address">
                                <h2><FaLocationDot />Address</h2>
                                <p>236 5th SE Avenue, New
                                    York NY10000, United
                                    States</p>
                            </div>
                            <div className="contact-phone">
                                <h2><FaPhoneAlt />Phone</h2>
                                <p>Mobile: +(84) 546-6789</p>
                                <p>Hotline: +(84) 456-6789</p>
                            </div>
                            <div className="contact-time">
                                <h2><MdOutlineAccessTime />
                                    Working Time</h2>
                                <p>Monday-Friday: 9:00 -
                                    22:00
                                </p>
                                <p>Saturday-Sunday: 9:00 -
                                    21:00</p>
                            </div>
                        </div>
                        <div className="contact-content-right">
                            <form action="">
                                <label htmlFor="name"> Your Name </label>
                                <input type="text" placeholder='John' />
                                <label htmlFor="email">Email </label>
                                <input type="email" placeholder='john@email.com' />
                                <label htmlFor="subject">Subject </label>
                                <input type="text" placeholder='This is an optional' />
                                <label htmlFor="message">Message </label>
                                <textarea name="message" id="" cols={60} rows={5} >Hi i would like to ask about</textarea>
                                <button>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </section>
    )
}

export default Contact