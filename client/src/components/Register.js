import React, { useState } from "react";
import axios from "axios";
import {connect} from 'react-redux';
import {register} from './actions/index';

function Register(props) {
  const [loginz, setLoginZ] = useState({username: '', password: '' });
  

  const handleSubmit = e => {
    e.preventDefault();
    register(loginz)
    props.history.push("/tabs");
   setLoginZ({username: '', password: '' });
   
  };

  return (
    <div className="RegisterForm">
      <div className = 'formwrapper'>
      <form className="formregister" onSubmit={handleSubmit}>
        <p className="regtitle">Register</p>
        <input className='inputregister'
          value={loginz.username}
          name="username"
          type="text"
          onChange={e => setLoginZ({...loginz, username: e.target.value})}
          placeholder="username"
        />
        <input className='inputregister'
          value={loginz.password}
          name="password"
          type="password"
          onChange={e => setLoginZ({...loginz, password: e.target.value})}
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


const mapStateToProps = (state) => {
  return {...state}
}
export default connect(mapStateToProps, {register})(Register);