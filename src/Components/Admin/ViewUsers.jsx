import React, { useEffect, useState } from 'react';
import "./Admin.css";
import { useLocation, useNavigate } from 'react-router-dom';

const ViewUsers = () => {
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
            const response = await fetch("https://api-k7vh.onrender.com/medical/user/all", {
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
        <section className="viewusers-main">
            <div className="viewusers-container">
                <div className="viewusers-header">
                    <h2>View Users</h2>
                    <label htmlFor="totalCount">Total Count</label>
                    <input type="text" value={totalCount} readOnly />
                </div>
                <div className="viewusers-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Sr no.</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Contact No</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((res, id) => (
                                <tr key={id}>
                                    <td>{id + 1}</td>
                                    <td>{res.Name}</td>
                                    <td>{res.Email}</td>
                                    <td>{res.Contact}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default ViewUsers;
