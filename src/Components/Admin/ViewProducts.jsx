import { useEffect, useState } from "react";
import "./Admin.css";
import { useLocation, useNavigate } from "react-router-dom";

const ViewProducts = () => {
    const [data, setData] = useState([]);
    const [totalCount, setTotalCount] = useState(0);
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
        try {
            const response = await fetch("https://api-5e1h.onrender.com                / medical / medicine / all", {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const resData = await response.json();
            setData(resData);
            setTotalCount(resData.length);
            console.log(resData);
        } catch (error) {
            console.error('Failed to fetch data:', error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <section className="viewproducts-main">
            <div className="viewproducts-container">
                <div className="viewproducts-header">
                    <h2>View Products</h2>
                    <label htmlFor="totalCount">Total Count</label>
                    <input type="text" value={totalCount} readOnly />
                </div>
                <div className="viewproducts-table">
                    <table className="border">

                        <tr>
                            <th>Sr No.</th>
                            <th>Image</th>
                            <th>Heading</th>
                            <th>Subheading</th>
                            <th>MRP</th>
                            <th>SP</th>
                            <th>Disclaimer</th>
                            <th>Formulation</th>
                            <th>Manufacturer</th>
                            <th>Brand</th>
                            <th>Storage</th>
                            <th>Dosage</th>
                            <th>Disease</th>
                            <th>Generic</th>
                            <th>Rating Count</th>
                            <th>Rating Review</th>
                        </tr>

                        {data.map((res, id) => (
                            <tr key={id}>
                                <td>{id + 1}</td>
                                <td><img src={res.Image} alt="" width="100%" height="100%" /></td>
                                <td>{res.Heading}</td>
                                <td>{res.Subheading}</td>
                                <td>{res.MRP}</td>
                                <td>{res.SP}</td>
                                <td>{res.Disclaimer}</td>
                                <td>{res.Formulation}</td>
                                <td>{res.Manufacturer}</td>
                                <td>{res.Brand ? "Brand" : "Generic"}</td>
                                <td>{res.Storage}</td>
                                <td>{res.Dosage}</td>
                                <td>{res.Disease}</td>
                                <td>{res.Generic ? "Yes" : "No"}</td>
                                <td>{res.Rating?.Count}</td>
                                <td>{res.Rating?.Review}</td>
                            </tr>
                        ))}

                    </table>
                </div>
            </div>
        </section>
    );
}

export default ViewProducts;
