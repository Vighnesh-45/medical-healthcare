import './Combine.css'
import { Link } from "react-router-dom"
import { useState } from 'react';

const Signup = () => {
    const [signUpData, setSignUpData] = useState({
        Name: "",
        Email: "",
        Pass: "",
        Contact: ""
    });
    const handelSignUpData = (e) => {
        const { name, value } = e.target;

        setSignUpData(() => {
            return {
                ...signUpData,
                [name]: value
            };
        });
    };
    const storeSignUpData = async (e) => {
        e.preventDefault();

        const { Name, Email, Pass, Contact } = signUpData;

        try {
            const response = await fetch("https://api-k7vh.onrender.com/medical/user/register", {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ Name, Email, Pass, Contact, Address: {} })
            });

            const responseData = await response.json();
            if (response.status === 201) {
                alert("Data Added")
                setSignUpData({ ...signUpData, Name: "", Email: "", Pass: "", Contact: "" });
            }

        } catch (error) {
            console.log(error);
        }
    };
    return (
        <section className="signup-main">
            <div className="signup-container">
                <div className="signup-form">
                    <h2>Create your New Account</h2>
                    <label htmlFor="">Name</label>
                    <input type="text" placeholder='Enter your Full Name' name='Name' onChange={handelSignUpData} value={signUpData.Name} />
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder='Enter your Email' name='Email' onChange={handelSignUpData} value={signUpData.Email} />
                    <label htmlFor="">Password</label>
                    <input type="password" placeholder='Enter your Password' name='Pass' onChange={handelSignUpData} value={signUpData.Pass} />
                    <label htmlFor="">Contact</label>
                    <input type="tel" placeholder='Enter your Contact Number' name='Contact' onChange={handelSignUpData} value={signUpData.Contact} />
                </div>
                <button onClick={storeSignUpData}>Create Account</button>
                <div className="already-login">
                    <p>Already have a account?</p>
                    <Link to="/Login"><button>Log in</button></Link>
                </div>
            </div>
        </section>
    )
}

export default Signup
