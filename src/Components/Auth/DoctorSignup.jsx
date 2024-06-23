import React from 'react'
import "./Combine.css"
import {Link} from "react-router-dom"

const DoctorSignup = () => {
    return (
        <section className="signup-main">
            <div className="signup-container">
                <div className="signup-form">
                    <label htmlFor="">Name</label>
                    <input type="text" placeholder='Enter your Full Name' name='Name'/>
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder='Enter your Email' name='Email'/>
                    <label htmlFor="">Password</label>
                    <input type="password" placeholder='Enter your Password' name='Pass' />
                    <label htmlFor="">Contact</label>
                    <input type="tel" placeholder='Enter your Contact Number' name='Contact' />
                </div>
                <button>Create Account</button>
                <div className="already-login">
                    <p>Already have a account?</p>
                    <Link to="/Login"><button>Log in</button></Link>
                </div>
            </div>
        </section>
    )
}

export default DoctorSignup