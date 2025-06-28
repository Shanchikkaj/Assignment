import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Registration = () => {
  const [user, setUser] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
    try {
      await axios.post('http://localhost:5000/api/users/register', user);
      toast.success('✅ Registration successful. Please log in.');
      navigate('/login');
    } catch (err) {
      toast.error('❌ Registration failed');
    }
  };

  return (
    <div className="auth-container">
      <h2>📝 Register</h2>
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
      <button onClick={handleRegister}>Register</button>
      <p>
        Already have an account? <Link to="/login">Login here</Link>
      </p>
    </div>
  );
};

export default Registration;
