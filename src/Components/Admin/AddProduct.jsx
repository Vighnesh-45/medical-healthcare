import { useEffect, useState } from "react";
import './Admin.css';
import { useLocation, useNavigate } from "react-router-dom";

const AddProduct = () => {
    const [image, setImage] = useState('');
    const [heading, setHeading] = useState('');
    const [subHeading, setSubHeading] = useState('');
    const [mrp, setMrp] = useState('');
    const [sp, setSp] = useState('');
    const [category, setCategory] = useState('');
    const [disclaimer, setDisclaimer] = useState('');
    const [formulation, setFormulation] = useState('');
    const [manufacturer, setManufacturer] = useState('');
    const [brand, setBrand] = useState('');
    const [storage, setStorage] = useState('');
    const [dosage, setDosage] = useState('');
    const [disease, setDisease] = useState('');
    const [generic, setGeneric] = useState(false);
    const [ratingCount, setRatingCount] = useState('');
    const [ratingReview, setRatingReview] = useState('');
    const [getDisease, setGetDisease] = useState([]);
    const [data, setData] = useState([]);
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
            const response = await fetch("https://api-k7vh.onrender.com/medical/medicine/all", {
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
            console.log(resData);
        } catch (error) {
            console.error('Failed to fetch data:', error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    const addData = async (e) => {
        e.preventDefault();

        const newProduct = {
            Image: image,
            Heading: heading,
            Subheading: subHeading,
            MRP: mrp,
            SP: sp,
            Disclaimer: disclaimer,
            Formulation: formulation,
            Manufacturer: manufacturer,
            Brand: brand,
            Storage: storage,
            Dosage: dosage,
            Disease: disease,
            Generic: generic,
            Categories: category,
            Rating: {
                Count: ratingCount,
                Review: ratingReview
            }
        };

        try {
            const res = await fetch("https://api-k7vh.onrender.com/medical/medicine/add", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newProduct)
            });

            if (res.status === 201) {
                setImage('');
                setHeading('');
                setSubHeading('');
                setMrp('');
                setSp('');
                setDisclaimer('');
                setFormulation('');
                setManufacturer('');
                setBrand('');
                setStorage('');
                setDosage('');
                setDisease('');
                setGeneric(false);
                setRatingCount('');
                setRatingReview('');
                setCategory('')
                alert('Product created successfully!');
                getData();
            } else {
                const errorData = await res.json();
                console.error('Failed to create product:', errorData);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const storeDisease = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch(`https://api-k7vh.onrender.com/medical/medicine/add`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ Disease: disease })
            });

            if (res.status === 201) {
                setGetDisease(prevState => [...prevState, disease]);
                setDisease("");
            } else {
                const errorData = await res.json();
                console.error('Failed to store disease:', errorData);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
    const delData = async (id) => {
        try {
            const res = await fetch(`https://api-k7vh.onrender.com/medical/medicine/del/${id}`, {
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

    return (
        <section className="addproduct-main">
            <div className="addproduct-container">
                <div className="addproduct-header">
                    <h2>Add Product</h2>
                </div>
                <div className="addproduct-input">
                    <input type="text" placeholder='Image' value={image} onChange={(e) => setImage(e.target.value)} />
                    <input type="text" placeholder='Heading' value={heading} onChange={(e) => setHeading(e.target.value)} />
                    <input type="text" placeholder='Subheading' value={subHeading} onChange={(e) => setSubHeading(e.target.value)} />
                    <input type="text" placeholder='MRP' value={mrp} onChange={(e) => setMrp(e.target.value)} />
                    <input type="text" placeholder='SP' value={sp} onChange={(e) => setSp(e.target.value)} />
                    <textarea placeholder="Disclaimer" value={disclaimer} onChange={(e) => setDisclaimer(e.target.value)}></textarea>
                    <input type="text" placeholder='Formulation' value={formulation} onChange={(e) => setFormulation(e.target.value)} />
                    <input type="text" placeholder='Manufacturer' value={manufacturer} onChange={(e) => setManufacturer(e.target.value)} />
                    <input type="text" placeholder='Brand' value={brand} onChange={(e) => setBrand(e.target.value)} />
                    <input type="text" placeholder='Storage' value={storage} onChange={(e) => setStorage(e.target.value)} />
                    <input type="text" placeholder='Dosage' value={dosage} onChange={(e) => setDosage(e.target.value)} />
                    <input type="text" placeholder='Category' value={category} onChange={(e) => setCategory(e.target.value)} />

                    <label htmlFor="">Disease</label>
                    <input type="text" placeholder='Disease' onChange={(e) => setDisease(e.target.value)} value={disease} />
                    <label htmlFor="">Generic</label>
                    <input type="checkbox" checked={generic} onChange={(e) => setGeneric(e.target.checked)} />
                    <input type="number" placeholder='Rating Count' value={ratingCount} onChange={(e) => setRatingCount(e.target.value)} />
                    <input type="text" placeholder='Rating Review' value={ratingReview} onChange={(e) => setRatingReview(e.target.value)} />
                    <button onClick={storeDisease}>Add New</button>
                    <div className="skillData">
                        {getDisease.map((element, id) => (
                            <div className="skill" key={id}>{element}</div>
                        ))}
                    </div>
                </div>
                <div className="disease-btn">
                    <button onClick={addData}>Submit</button>
                </div>
            </div>
            <div className="product-table-container">
                <h2>Product List</h2>
                <table className="border">
                    <tr>
                        <th>Sr No.</th>
                        <th>Category</th>
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
                        <th>Delete</th>
                    </tr>


                    {data.map((res, id) => (
                        <tr key={id}>
                            <td>{id + 1}</td>
                            <td>{res.Categories}</td>
                            <td><img src={res.Image} alt="" width="100%" height="10%" /></td>
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
                            <td><button onClick={() => delData(res._id)}>Delete</button></td>
                        </tr>
                    ))}

                </table>
            </div>
        </section >
    );
};

export default AddProduct;
