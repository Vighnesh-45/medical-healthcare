
import "./Admin.css"
// import diabetes from "./../../assets/diabetes.png"

const AddProduct = () => {
    return (
        <section className="addproduct-main">
            <div className="addproduct-container">
                <div className="addproduct-header">
                    <h2>Add Product</h2>
                    <div className="addproduct-input">
                        <input type="checkbox" />
                        <label htmlFor="vehicle1">Diabetes Care</label>
                        <input type="checkbox" />
                        <label htmlFor="vehicle1">Nutritional Supplements</label>
                        <input type="checkbox" />
                        <label htmlFor="vehicle1">Ayurvedic Products</label>
                        <input type="checkbox" />
                        <label htmlFor="vehicle1">Eye Care Products</label>
                        <input type="checkbox" />
                        <label htmlFor="vehicle1">Elderly Care</label>
                        <input type="checkbox" />
                        <label htmlFor="vehicle1">Health Care Devices</label>
                        <input type="checkbox" />
                        <label htmlFor="vehicle1">Cough & Cold</label>
                        <input type="checkbox" />
                        <label htmlFor="vehicle1">Heart Care</label>
                        <input type="checkbox" />
                        <label htmlFor="vehicle1">Blood Pressure</label>
                        <input type="checkbox" />
                        <label htmlFor="vehicle1">Personal Care</label>
                        <input type="checkbox" />
                        <label htmlFor="vehicle1">Kidney Care</label>
                        <input type="checkbox" />
                        <label htmlFor="vehicle1">Newly Launched Generic Medicine</label>
                    </div>
                </div>
                <div className="addproduct-input-field">
                    <input type="text" placeholder='Id' />
                    <input type="text" placeholder='Image' />
                    <input type="text" placeholder='Heading' />
                    <input type="text" placeholder='Subheading' />
                    <input type="text" placeholder='MRP' />
                    <input type="text" placeholder='SP' />
                    <textarea name="" id="" placeholder="Disclaimer"></textarea>
                    <input type="text" placeholder='Formulation' />
                    <input type="text" placeholder='Manufacturer' />
                    <input type="text" placeholder='Brand' />
                    <input type="text" placeholder='Storage' />
                    <input type="text" placeholder='Dosage' />
                    <label htmlFor="">Disease</label>
                    <input type="text" />
                    <button>Add New</button>
                </div>
                <div className="disease-btn">
                        <button>Submit</button>
                    </div>
            </div>
        </section>
    )
}

export default AddProduct