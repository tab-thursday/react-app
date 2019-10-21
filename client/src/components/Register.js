import React, { useState } from "react";
import axios from "axios";

function Register(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    const baseURL = "https://tabless-be.herokuapp.com/api/auth";
    axios
      .post(`${baseURL}/register`, { username: username, password: password })
      .then(res => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        props.history.push("/tabs");
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className="RegisterForm">
      <div className = 'formwrapper'>
      <form className="formregister" onSubmit={handleSubmit}>
        <p className="regtitle">Register</p>
        <input className='inputregister'
          value={username}
          name="username"
          type="text"
          onChange={e => setUsername(e.target.value)}
          placeholder="username"
        />
        <input className='inputregister'
          value={password}
          name="password"
          type="password"
          onChange={e => setPassword(e.target.value)}
          placeholder="password"
        />
        <div className = 'buttonwrapper'>
        <button type="submit" className="SubmitButton">
          Connect!
        </button>
        </div>
      </form>
    </div>
    </div>
  );
}
export default Register;