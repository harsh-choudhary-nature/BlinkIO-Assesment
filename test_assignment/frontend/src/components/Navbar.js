import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsLoggedIn(false);
        navigate('/login');
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/" className="navbar-title">Task Manager</Link>
            </div>
            <div className="navbar-links">
                {isLoggedIn ? (
                    <button onClick={handleLogout} className="navbar-button">Logout</button>
                ) : (
                    <>
                        <Link to="/register" className='navbar-link'>Register</Link>
                        <Link to="/login" className='navbar-link'>Login</Link>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
