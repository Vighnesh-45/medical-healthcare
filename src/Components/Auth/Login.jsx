import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import './Combine.css';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Button pressed");

        // Log the payload
        console.log("Payload:", { Email: email, Pass: pass });

        try {
            const response = await fetch('https://api-5e1h.onrender.com/medical/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ Email: email, Pass: pass }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error('Error response from server:', errorData);
                throw new Error('Login failed');
            }

            const data = await response.json();
            console.log(data);
            localStorage.setItem('userToken', data.token);
            localStorage.setItem('userRole', data.role);
            navigate('/');

        } catch (error) {
            console.error('Login error:', error);
        }
    };

    const handleGoogleLogin = () => {
        window.location.href = 'https://api-5e1h.onrender.com/medical/auth/google';
    };

    return (
        <section className="login-main">
            <div className="login-container">
                <div className="login-form">
                    <h2>Sign In</h2>
                    <div className="email">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            placeholder="Enter your Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="password">
                        <label htmlFor="pass">Password</label>
                        <input
                            type="password"
                            placeholder="Enter your Password"
                            value={pass}
                            onChange={(e) => setPass(e.target.value)}
                            required
                        />
                    </div>
                    <button onClick={handleSubmit}>Sign In</button>
                </div>
                <div className="new-account">
                    <p>Don't have an account?</p>
                    <Link to="/Signup"><button>Sign up</button></Link>
                </div>
                <div className="google-auth">
                    <button onClick={handleGoogleLogin}>Sign In with Google</button>
                </div>
            </div>
        </section>
    );
};

export default Login;
