import React from 'react'
import "./Admin.css"

const ViewUsers = () => {
    return (
        <section className="viewusers-main">
            <div className="viewusers-container">
                <div className="viewusers-header">
                    <h2>View Users</h2>
                    <label htmlFor="">Total Count</label>
                    <input type="text" />
                </div>
                <div className="viewusers-table">
                    <table>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone No.</th>
                    </table>
                </div>
            </div>
        </section>
    )
}

export default ViewUsers