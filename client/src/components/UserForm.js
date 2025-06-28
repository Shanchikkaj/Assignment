import React, { useState } from 'react';
import axios from 'axios';

const UserForm = () => {
  const [user, setUser] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const register = async () => {
    await axios.post('http://localhost:5000/api/users/register', user);
    alert('Registered!');
  };

  const login = async () => {
    await axios.post('http://localhost:5000/api/users/login', user);
    alert('Logged in!');
  };

  return (
    <div>
      <h3>User Actions</h3>
      <input name="username" placeholder="Username" onChange={handleChange} />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} />
      <button onClick={register}>Register</button>
      <button onClick={login}>Login</button>
    </div>
  );
};

export default UserForm;
