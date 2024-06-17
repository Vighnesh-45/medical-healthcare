import { useEffect, useState } from "react";
import "./Admin.css";

const API_BASE_URL = "https://codify-api-541e.onrender.com/medical/medicine/all";

const AddProduct = () => {
    const [image, setImage] = useState('');
    const [heading, setHeading] = useState('');
    const [subHeading, setSubHeading] = useState('');
    const [mrp, setMrp] = useState('');
    const [sp, setSp] = useState('');
    const [disclaimer, setDisclaimer] = useState('');
    const [formulation, setFormulation] = useState('');
    const [manufacturer, setManufacturer] = useState('');
    const [brand, setBrand] = useState('');
    const [storage, setStorage] = useState('');
    const [dosage, setDosage] = useState('');
    const [disease, setDisease] = useState('');
    const [getDisease, setGetDisease] = useState([]);
    const [data, setData] = useState([]);

    const getData = async () => {
        try {
            const response = await fetch(`http://localhost:8000/medical/medicine/all`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            const resData = await response.json();
            setData(resData);
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
            Disease: disease
        };

        try {
            const res = await fetch("http://localhost:8000/medical/medicine/add", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newProduct)
            });

            if (res.status === 201) {
                // Clear the form fields
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
                alert('Product created successfully!');
                getData(); // Refresh the data
            } else {
                console.error('Failed to create product:', await res.json());
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const storeDisease = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch(`http://localhost:8000/medical/medicine/${data}/${disease}/add`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ Disease: disease })
            });

            if (res.status === 201) {
                setDisease("");
            } else {
                console.error('Failed to store disease:', await res.json());
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <section className="addproduct-main">
            <div className="addproduct-container">
                <div className="addproduct-header">
                    <h2>Add Product</h2>
                    <div className="addproduct-input">
                        {/* Checkbox categories here */}
                    </div>
                </div>
                <div className="addproduct-input-field">
                    <input type="text" placeholder='Image' value={image} onChange={(e) => setImage(e.target.value)} />
                    <input type="text" placeholder='Heading' value={heading} onChange={(e) => setHeading(e.target.value)} />
                    <input type="text" placeholder='Subheading' value={subHeading} onChange={(e) => setSubHeading(e.target.value)} />
                    <input type="text" placeholder='MRP' value={mrp} onChange={(e) => setMrp(e.target.value)} />
                    <input type="text" placeholder='SP' value={sp} onChange={(e) => setSp(e.target.value)} />
                    <textarea name="" id="" placeholder="Disclaimer" value={disclaimer} onChange={(e) => setDisclaimer(e.target.value)}></textarea>
                    <input type="text" placeholder='Formulation' value={formulation} onChange={(e) => setFormulation(e.target.value)} />
                    <input type="text" placeholder='Manufacturer' value={manufacturer} onChange={(e) => setManufacturer(e.target.value)} />
                    <input type="text" placeholder='Brand' value={brand} onChange={(e) => setBrand(e.target.value)} />
                    <input type="text" placeholder='Storage' value={storage} onChange={(e) => setStorage(e.target.value)} />
                    <input type="text" placeholder='Dosage' value={dosage} onChange={(e) => setDosage(e.target.value)} />
                    <label htmlFor="">Disease</label>
                    <input type="text" placeholder='disease' onChange={(e) => setDisease(e.target.value)} value={disease} />
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
                <table className="product-table">
                    <thead>
                        <tr>
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
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((product, index) => (
                            <tr key={index}>
                                <td>{product.Image}</td>
                                <td>{product.Heading}</td>
                                <td>{product.Subheading}</td>
                                <td>{product.MRP}</td>
                                <td>{product.SP}</td>
                                <td>{product.Disclaimer}</td>
                                <td>{product.Formulation}</td>
                                <td>{product.Manufacturer}</td>
                                <td>{product.Brand}</td>
                                <td>{product.Storage}</td>
                                <td>{product.Dosage}</td>
                                <td>{product.Disease}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default AddProduct;
