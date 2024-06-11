import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Combine.css'
const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("button press")
        try {
            const response = await fetch('http://localhost:8000/medical/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ Email:email, Pass:pass }),
            });

            if (!response.ok) {
                throw new Error('Login failed');
            }

            const data = await response.json();
            console.log(data)

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
                <input type="text" placeholder="Email" value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                <input type="password" name="Pass" value={pass}
                    onChange={(e) => setPass(e.target.value)} />
                <button onClick={handleSubmit}>submit</button>
            </div>
        </section>
    )
}

export default Login
