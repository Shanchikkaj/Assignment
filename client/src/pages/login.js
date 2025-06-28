import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import './Auth.css';

const Login = () => {
  const [user, setUser] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/users/login', user);

      // Save user to localStorage
      localStorage.setItem('user', JSON.stringify(res.data));

      // Show toast & redirect
      toast.success('✅ Login successful!');
      navigate('/home');
    } catch (err) {
      toast.error('❌ Login failed!');
    }
  };

  return (
    <div className="auth-container">
      <h2>🔐 Login</h2>
      <input
        type="text"
        name="username"
        placeholder="Username"
        onChange={handleChange}
        value={user.username}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
        value={user.password}
      />
      <button onClick={handleLogin}>Login</button>
       <p>
        Don't have an account? <Link to="/register">Register here</Link>
      </p>
    </div>
  );
};

export default Login;
