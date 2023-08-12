
import React, { useState } from 'react';
import './login.scss';
import validate from '@utils/validate';
import api from '@api';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';

export default function Login() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    const user_name = e.target.user_name.value;
    const password = e.target.password.value;

    if (!user_name || !password) {
      setErrorMessage('Please enter both user name (or email) and password.');
      return;
    }

    const data = {
      user_name,
      password,
      type: !validate.isEmail(user_name), // Email false, User Name true
    };

    try {
      const result = await api.users.login(data);
      if (result.status === 200) {
        if (result.data.token === undefined) {
          setErrorMessage('Login failed. Please check your credentials.');
        } else {
          localStorage.setItem('token', result.data.token);
          message.success('Login Successfully');
          setTimeout(() => {
            // navigate('/');
            window.location.href = "/"
          }, 2000);
        }
      } else {
        setErrorMessage(result.data.message);
      }
    } catch (err) {
      setErrorMessage('An error occurred while trying to log in.');
    }
  };

  return (
    <div className="login_container">
      <h2>Log In to your Account</h2>
      <form onSubmit={handleLogin}>
        <div className="form-control">
          <label htmlFor="userName">User Name or Email:</label><br />
          <input type="text" name="user_name" id="userName" placeholder="User name or Email" />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password:</label><br />
          <input type="password" name="password" id="password" placeholder="Password" />
        </div>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <button type="submit" className="login_btn">Login</button>
        <button type="button" className="back_btn" onClick={() => navigate('/register')}>Create Account</button>
      </form>
    </div>
  );
}

