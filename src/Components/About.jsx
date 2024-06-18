import React from 'react'
import Navbar from "./Layout/Navbar"
import Footer from "./Layout/Footer"
import "./About.css"

const About = () => {
  return (
    <section className="about-main">
        <Navbar/>
        <div className="about-container">
            <div className="about-content">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus tempora possimus, quae temporibus asperiores omnis eius quia, quod voluptas incidunt nemo consectetur quaerat! Eveniet animi suscipit in veniam voluptatem at, quisquam, repudiandae esse explicabo culpa, quis ipsam fuga perspiciatis aliquam illo impedit blanditiis. Necessitatibus quasi vero deserunt suscipit reprehenderit non?</p>
            </div>
        </div>
        <Footer/>
    </section>
  )
}

export default About