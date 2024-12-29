import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = async () => {
        try {
            await axios.post('http://localhost:4000/api/register', { username, password });
            alert('Registration successful! Proceed to Login!');
            navigate('/');
        } catch (err) {
            if (err.response && err.response.data.message === 'Username is already taken') {
                alert('The username is already taken. Please choose a different one.');
            } else {
                alert('Registration failed!');
            }
        }
    };

    return (
        <div className="form-container">
            <div className="form-box">
                <h2>Register</h2>
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
                <button onClick={handleRegister} className="submit-button">Register</button>
            </div>
        </div>
    );
};

export default Register;
