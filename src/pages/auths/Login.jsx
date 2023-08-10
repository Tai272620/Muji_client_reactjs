import React, { useEffect } from 'react'
import './login.scss';
import validate from '@utils/validate';
import api from '@api';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';

export default function Login() {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      // window.location.href = "/";
    }
  })
  return (
    <div className='login_container'>
      <h2>Log In to your Account</h2>
      <form onSubmit={async (e) => {
        e.preventDefault();
        let data = {
          user_name: e.target.user_name.value,
          password: e.target.password.value,
          type: !validate.isEmail(e.target.user_name.value) // Email false, User Name true
        }

        try {
          let result = await api.users.login(data);
          if (result.status == 200) {
            if (result.data.token == undefined) {
              alert("Đăng nhập thất bại")
            } else {
              localStorage.setItem("token", result.data.token);
              message.success("Login Successfully!")
              setTimeout(() => {
                window.location.href = "/"
              }, 2000)
            }
          } else {
            alert(result.data.message)
          }
        } catch (err) {

        }

      }}>
        <div className="form-control">
          <label htmlFor="userName">User Name or Email:</label><br />
          <input type="text" name='user_name' id='userName' placeholder='User name or Email' />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password:</label><br />
          <input type="text" name='password' id='password' placeholder='Password' />
        </div>
        <button type='submit' className='login_btn'>Login</button>
        <button type='button' className='back_btn' onClick={() => navigate("/register")}>Create Account</button>
      </form>
    </div>
  )
}
