import './Combine.css'
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
            const response = await fetch("https://codify-api-541e.onrender.com/medical/user/register", {
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
                <input type="text" placeholder='name' name='Name' onChange={handelSignUpData} value={signUpData.Name} />
                <input type="email" placeholder='email' name='Email'  onChange={handelSignUpData} value={signUpData.Email} />
                <input type="password" placeholder='password' name='Pass' onChange={handelSignUpData} value={signUpData.Pass} />
                <input type="tel" placeholder='contact' name='Contact' onChange={handelSignUpData} value={signUpData.Contact} />
                <button onClick={storeSignUpData}>submit</button>
            </div>
        </section>
    )
}

export default Signup
