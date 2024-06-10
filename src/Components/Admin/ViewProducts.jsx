import React from 'react'
import "./Admin.css"

const ViewProducts = () => {
  return (
    <section className="viewproducts-main">
        <div className="viewproducts-container">
            <div className="viewproducts-header">
                <h2>View Products</h2>
                <label htmlFor="">Total Count</label>
                <input type="text" />
            </div>
            <div className="viewproducts-table">
                <table>
                    <th>Diabetes Care</th>
                    <th>Nutritional Supplements</th>
                    <th>Ayurvedic Products</th>
                    <th>Eye Care Products</th>
                    <th>Elderly Care</th>
                    <th>Health Care Devices</th>
                    <th>Cough & Cold</th>
                    <th>Heart Care</th>
                    <th>Blood Pressure</th>
                    <th>Personal Care</th>
                    <th>Kidney Care</th>
                    <th>Newly Launched Generic Medicines</th>
                    <th>Categories</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </table>
            </div>
        </div>
    </section>

  )
}

export default ViewProducts