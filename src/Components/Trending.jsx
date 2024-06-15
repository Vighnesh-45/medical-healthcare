import React, { useState, useEffect } from 'react';
import rightarrow from "./../assets/right-arrow.png";
import "./Trending.css";
import { Link } from 'react-router-dom';

const Trending = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://codify-api-541e.onrender.com/medical/medicine/all");
                if (!response.ok) {
                    throw new Error(`Error fetching data: ${response.statusText}`);
                }
                const responseData = await response.json();
                setData(responseData);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    function selectRandomElements(array, n) {
        const newArray = array.slice();
        const randomElements = [];

        for (let i = 0; i < n && newArray.length > 0; i++) {
            const randomIndex = Math.floor(Math.random() * newArray.length);
            randomElements.push(newArray.splice(randomIndex, 1)[0]);
        }
        return randomElements;
    }

    const randomArray = selectRandomElements(data, 5);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <section className="trending-main">
            <div className="trending-container">
                <div className="trending-header">
                    <h2>Top Trending Products</h2>
                    <div className="trending-right-header">
                    <Link to='/Shop'><button>View All<img src={rightarrow} /></button></Link>
                    </div>
                </div>
                <div className="trending-cards">
                    {randomArray.map((res, id) => (
                        <div className="card-one" key={id}>
                            <img src={res.Image} alt="" />
                            <h2>{res.Heading}</h2>
                            <h4>{res.Subheading}</h4>
                            <h3>Rs. {res.SP}</h3>
                        </div>
                    ))}
                </div>
                <div className="show-button">
                    <Link to="/Shop"><button>Show More</button></Link>
                </div>
            </div>
        </section>
    );
};

export default Trending;
