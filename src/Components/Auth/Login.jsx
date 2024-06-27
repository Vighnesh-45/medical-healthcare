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
        console.log("button press")
        try {
            const response = await fetch('https://api-5e1h.onrender.com/medical/user/login', {
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
            console.log(data);
            localStorage.setItem('userToken', data.token);
            localStorage.setItem('userRole', data.role);
            navigate('/')

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
                        <label htmlFor="">Email</label>
                        <input type="text" placeholder="Enter your Email" value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="password">
                        <label htmlFor="">Password</label>
                        <input type="password" placeholder="Enter your Password" name="Pass" value={pass}
                            onChange={(e) => setPass(e.target.value)} />
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
    )
}

export default Login;
