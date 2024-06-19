import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import "./Admin.css";

const AdminLogin = () => {
    const navigate = useNavigate()
    const gotToNextPage = () => {
        navigate(`/Admin`, { state: "Pass" })
    }

    const [UserName, setUsername] = useState("");
    const [Password, setPassword] = useState("");

    const handleUsername = (e) => {
        setUsername(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const Login = (e) => {
        e.preventDefault();
        if (UserName === "") {
            alert("Please Enter Valid Username");
        } else if (Password === "") {
            alert("Please Enter Valid Password");
        } else if (UserName === "Codify" && Password === "Codify@123") {
            alert("Login Successfull");
            setUsername("");
            setPassword("");
            gotToNextPage();
        } else {
            alert("Invalid Credentials");
        }
    }

    return (
        <>
            <section className="adminPanel">
                <h2>Admin Panel</h2>
                <div className="adminPanel_container">
                    <form>
                        <input type="text" name='Username' onChange={handleUsername} placeholder='UserName' />
                        <input type="password" name="password" onChange={handlePassword} placeholder='Password' />
                        <button onClick={Login}>Login</button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default AdminLogin