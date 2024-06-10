import React from 'react'
import "./Admin.css"

const AddCategories = () => {
    return (
        <section className="addcategories-main">
            <div className="addcategories-container">
                <div className="addcategories-input">
                    <input type="text" placeholder='Image' />
                    <input type="text" placeholder='Heading' />
                    <button>Submit</button>
                </div>
                <div className="addcategories-table">
                    <h2>View Categories</h2>
                    <table>
                        <th>Sr. No</th>
                        <th>Image</th>
                        <th>Heading</th>
                        <th>Edit</th>
                        <th>Delete</th>
                        <tr>
                            <td>Alfreds Futterkiste</td>
                            <td>Maria Anders</td>
                            <td>Germany</td>
                            <td>Hi</td>
                            <td>Hello</td>
                        </tr>
                    </table>
                </div>
            </div>
        </section>
    )
}

export default AddCategories