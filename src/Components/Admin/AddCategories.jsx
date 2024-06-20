import React, { useEffect, useState } from 'react'
import "./Admin.css"
import { useLocation, useNavigate } from 'react-router-dom'

const AddCategories = () => {
    const [image, setImage] = useState('')
    const [heading, setHeading] = useState('')
    const [data, setData] = useState([])
    const location = useLocation();
    const navigate = useNavigate();
    const condition = location.state || {};

    const validate = () => {
        if (condition !== "Pass") {
            navigate(`/adminlogin`);
        }
    };

    useEffect(() => {
        validate();
    }, [condition]);

    const getData = async () => {
        const response = await fetch("https://codify-api-541e.onrender.com/medical/categories/all", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const resData = await response.json();
        console.log(resData);
        setData(resData);

    }
    useEffect(() => {
        getData()
    }
    )

    const delData = async (id) => {
        try {
            const res = await fetch(`https://codify-api-541e.onrender.com/medical/categories/del/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            });

            const data = await res.json();
        } catch (error) {
            console.error("Delete error:", error);
        }
    }

    const addData = async (e) => {
        e.preventDefault();

        const imageData = image;
        const headingData = heading;

        try {
            const res = await fetch("https://codify-api-541e.onrender.com/medical/categories/add", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ Image: imageData, Heading: headingData })
            });

            const resData = await res.json();

            if (resData.status === 201) {
                setImage('');
                setHeading('');
                alert('Category created successfully!');
            }
        } catch (error) {
            console.log('Error:', error);
        }
    }


    return (
        <section className="addcategories-main">
            <div className="addcategories-container">
                <div className="addcategories-input">
                    <input type="text" placeholder='Image' value={image} onChange={(e) => setImage(e.target.value)} />
                    <input type="text" placeholder='Heading' value={heading} onChange={(e) => setHeading(e.target.value)} />
                    <button onClick={addData} >Submit</button>
                </div>
                <div className="addcategories-table">
                    <h2>View Categories</h2>
                    <table>
                        <tr>
                            <th>Sr. No</th>
                            <th>Image</th>
                            <th>Heading</th>
                            <th>Delete</th>
                        </tr>

                        {data.map((res, id) => {
                            return (
                                <tr>
                                    <td>{id + 1}</td>
                                    <td><img src={res.Image} alt="" width="20%" height="20%" /></td>
                                    <td>{res.Heading}</td>
                                    <td><button onClick={() => delData(res._id)}>Delete</button></td>
                                </tr>
                            )
                        })}

                    </table>
                </div>
            </div>
        </section>
    )
}

export default AddCategories