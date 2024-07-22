import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import './Combine.css';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Button pressed");

        setLoading(true);
        setMessage('Logging in, please wait...');

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
                setLoading(false);
                setMessage('Login failed. Please try again.');
                throw new Error('Login failed');
            }

            const data = await response.json();
            console.log(data);
            localStorage.setItem('userToken', data.token);
            localStorage.setItem('userRole', data.role);
            setMessage('Login successful! Redirecting...');
            setTimeout(() => {
                navigate('/');
            }, 2000);

        } catch (error) {
            console.error('Login error:', error);
            setLoading(false);
            setMessage('An error occurred. Please try again.');
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
                    <button onClick={handleSubmit} disabled={loading}>
                        {loading ? (
                            <>
                                Signing In... <span className="spinner"></span>
                            </>
                        ) : 'Sign In'}
                    </button>
                    {message && <p>{message}</p>}
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
