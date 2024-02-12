import React, { useState } from 'react';
import { FaUser, FaLock } from "react-icons/fa";
import './Login.css';
import Navbar from '../Navbar/Navbar';

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await fetch('http://localhost:3501/users');
            const users = await response.json();
            const user = users.find(u => u.username === username && u.password === password);
            if (user) {
                alert("LOGIN SUCCESSFUL");
            } else {
                alert('Invalid username or password');
                setUsername('');
                setPassword('');
                return;
            }
        } catch (err) {
            console.error('Error during login:', err);
        }
    }

    return (
        <>
            <Navbar />
            <div className='login-section'>
                <section className='login-field'>

                    <div className='username-field'>
                        <input
                            type="text"
                            id="username"
                            placeholder="ENTER NAME"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <FaUser className="icon" />
                    </div>

                    <div className='password-field'>
                        <input
                            type="password"
                            id="password"
                            placeholder="ENTER PASSWORD"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <FaLock className="icon" />

                    </div>

                    <button onClick={handleLogin}>LOGIN</button>

                </section>
            </div>
        </>
    );
};

export default Login;