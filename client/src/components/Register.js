import React, { useState } from "react";
import axios from "axios";

function Register(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    const baseURL = "https://mypartyplanner.herokuapp.com/api";
    axios
      .post(`${baseURL}/auth/register`, { username: username, password })
      .then(res => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        props.history.push("/");
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