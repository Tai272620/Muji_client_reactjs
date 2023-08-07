import React from 'react';
import api from '@api';
import './register.scss';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const navigate = useNavigate();
  return (
    <div className='register_container'>
      <h2>Create Account</h2>
      <p>Please enter the following details to create an account.</p>
      <form onSubmit={async (e) => {
        e.preventDefault();

        let newUser = {
          user_name: e.target.user_name.value,
          email: e.target.email.value,
          first_name: e.target.first_name.value,
          last_name: e.target.last_name.value,
          password: e.target.password.value,
        }


        let result = await api.users.register(newUser)

        if (result.status != 200) {
          alert(result.response.data.message)
        } else {
          alert(result.data != undefined ? result.data.message : result.message)
        }


      }}>
        <div className="form_control">
          <label htmlFor="userName">User Name:</label><br />
          <input type="text" name='user_name' id='userName' placeholder='User name' />
        </div>
        <div className="form_control">
          <label htmlFor="email">Email:</label><br />
          <input type="text" name='email' id='email' placeholder='Email' />
        </div>
        <div className="form_control">
          <label htmlFor="firstName">First name:</label><br />
          <input type="text" name='first_name' id='firstName' placeholder='First name' />
        </div>
        <div className="form_control">
          <label htmlFor="lastName">Last name:</label><br />
          <input type="text" name='last_name' id='lastName' placeholder='Last name' />
        </div>
        <div className="form_control">
          <label htmlFor="password">Password:</label><br />
          <input type="assword" name='assword' id='password' placeholder='Password' />
        </div>
        <button type='submit' className='register_btn'>Register</button>
        <button type='button' className='back_btn' onClick={() => navigate("/login")}>Back to Login Page</button>
      </form>
    </div>
  )
}
