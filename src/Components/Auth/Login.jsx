import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom"
import './Combine.css'

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("button press")
        try {
            const response = await fetch('https://api-k7vh.onrender.com/medical/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ Email: email, Pass: pass }),
            });

            if (!response.ok) {
                throw new Error('Login failed');
            }

            const data = await response.json();
            console.log(data)

            // Store data in local storage
            localStorage.setItem('userToken', data.token); // assuming the token is returned as data.token
            localStorage.setItem('userRole', data.role); // assuming the role is returned as data.role

            // Redirect based on user role using navigate
            navigate('/')

        } catch (error) {
            console.error('Login error:', error);
            // Handle error, show error message to user
        }
    };

    return (
        <section className="login-main">
            <div className="login-container">
                <div className="login-form">
                    <h2>Sign In</h2>
                    <label htmlFor="">Email</label>
                    <input type="text" placeholder="Enter your Email" value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                    <label htmlFor="">Password</label>
                    <input type="password" placeholder="Enter your Password" name="Pass" value={pass}
                        onChange={(e) => setPass(e.target.value)} />
                </div>
                <button onClick={handleSubmit}>Sign In</button>
                <div className="new-account">
                    <p>Don't have a account</p>
                    <Link to="/Signup"><button>Sign up</button></Link>
                </div>
            </div>
        </section>
    )
}

export default Login
