import React from 'react'
import "./Combine.css"

const DoctorLogin = () => {
    return (
        <section className="login-main">
            <div className="login-container">
                <div className="login-form">
                    <h2>Doctor Login</h2>
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder="Enter your email" />
                    <label htmlFor="">Password</label>
                    <input type="password" placeholder="Enter your password" />
                </div>
                <button type="submit">Sign In</button>
            </div>
        </section>
    )
}

export default DoctorLogin