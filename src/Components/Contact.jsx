import React, { useState } from 'react';
import "./Contact.css";
import Navbar from './Layout/Navbar';
import Footer from './Layout/Footer';
import logo from "./../assets/logo.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineAccessTime } from "react-icons/md";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        if (!formData.name) newErrors.name = "Name is required.";
        if (!formData.email) {
            newErrors.email = "Email is required.";
        } else if (!validateEmail(formData.email)) {
            newErrors.email = "Invalid email format.";
        }
        if (!formData.message) newErrors.message = "Message is required.";

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            localStorage.setItem('contactFormData', JSON.stringify(formData));
            console.log('Data stored in local storage:', JSON.parse(localStorage.getItem('contactFormData')));
            alert('Data stored in local storage');
            // Optionally, you can clear the form
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: '',
            });
        }
    };

    return (
        <section className='contact-main'>
            <Navbar />
            <div className="contact-container">
                <div className="contact-header">
                <img src={logo} alt="" />
                    <h2>Contact
                        <p>Home<MdKeyboardArrowRight />Contact</p>
                    </h2>
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
                            <form onSubmit={handleSubmit}>
                                <label htmlFor="name">Your Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="John"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                                {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}

                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="john@email.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}

                                <label htmlFor="subject">Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="This is an optional"
                                    value={formData.subject}
                                    onChange={handleChange}
                                />

                                <label htmlFor="message">Message</label>
                                <textarea
                                    name="message"
                                    cols={60}
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleChange}
                                ></textarea>
                                {errors.message && <p style={{ color: 'red' }}>{errors.message}</p>}

                                <button type="submit">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </section>
    );
}

export default Contact;
