import React, { useState } from "react";
import axios from "axios";
import {Link} from 'react-router-dom';


const Login = props => {
  const [logini, setLogini] = useState({ username: "", password: "" });
  const changeHandler = event => {
    event.preventDefault();
    setLogini({
      ...logini,
      [event.target.name]: event.target.value
    });
  };
  const handleSubmit = event => {
    const baseURL = 'https://tabless-be.herokuapp.com/api/auth'
    event.preventDefault();
    axios
      .post(`${baseURL}/login`, logini)
      .then(response => {
        localStorage.setItem("token", response.data.token);
        props.history.push("/tabs");
      })
      .catch(err => console.log("error in handlesSub", err.response));
    setLogini({ username: "", password: "" });
  };
  return (
    <div className="loginwrapper">
      <div className="loginContainer">
        <div className="PartyHead">
          <h1>Tabless Thursday</h1>
        </div>
        <div className = 'formwrapper'>
        <form onSubmit={handleSubmit}>
          <input
            className="name"
            placeholder="enter username"
            type="text"
            value={logini.username}
            name="username"
            onChange={changeHandler}
          />
          <input
            className="password"
            placeholder="enter password"
            type="password"
            value={logini.password}
            name="password"
            onChange={changeHandler}
          />
          <div className = 'buttonwrapper'>
          <button type="submit" className="SubmitButtonn">
            Login!
          </button>
          </div>
          <span>
            Dont have an account? <Link to="./Register">Register !</Link>
          </span>
        </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
