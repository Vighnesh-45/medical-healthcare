import React from 'react'
import "./Admin.css"

const Admin = () => {
  return (
    <section className="admin-main">
        <div className="admin-container">
            <div className="admin-btn">
                <button>Add Categories</button>
                <button>Add Product</button>
                <button>View Product</button>
                <button>View Users</button>
                <button>View Orders</button>
            </div>
        </div>
    </section>
  )
}

export default Admin