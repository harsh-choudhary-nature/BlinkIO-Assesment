import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = ({ setIsLoggedIn }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    
    const handleLogin = async () => {
        try {
            const res = await axios.post('http://localhost:4000/api/login', { username, password });
            localStorage.setItem('token', res.data.token);
            setIsLoggedIn(true);
            navigate('/');
        } catch (err) {
            alert('Login failed!');
        }
    };

    return (
        <div className="form-container">
            <div className="form-box">
                <h2>Login</h2>
                <input
                    placeholder="Username"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    className="input-field"
                />
                <input
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    className="input-field"
                />
                <button onClick={handleLogin} className="submit-button">Login</button>
            </div>
        </div>
    );
};

export default Login;
