import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {login} from './actions/index';
import styled from 'styled-components';


const size = {
  laptop: '1024px'
}
const device = {
  laptop: `(min-width: ${size.laptop})`
}

const LoginTitle = styled.h1`
  color: black;
  font-size: 2.8rem;
  margin: 0;
  padding:2%;
  padding-bottom: 7%;
  font-family: 'Noto Serif TC', serif;
`;
const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const Button = styled.button`
  display: flex;
  justify-content: center;
  padding: 3px 5px 3px 5px;
  margin: 3%;
  color: #fffafa;
  background: #22283a;
  border-radius: 5px;
  padding: 4px 8px 4px 8px;
  font-size: 0.9rem;
  border: 2px solid #dcdcdc;
  margin-top:13%;
  &:hover {
    color: gray;
    background: black;
  }
`;
const MainWrapper = styled.div`

padding-bottom: 9%;
display:flex;
justify-content: center;

`;
const Cta = styled.div`
box-shadow: 10px 10px 5px gray;
margin-top:18%;
border: 4px solid #00000082;
border-radius: 10px;
padding: 70px 1px 120px 1px;
background-color: #01010c4d;
width:50%;
font-family: 'Noto Serif TC', serif;
@media ${device.laptop} {
margin-top:12%;
border: 4px solid #00000082;
border-radius: 10px;
padding: 70px 1px 120px 1px;
background-color: #01010c4d;
width:40%;
font-family: 'Noto Serif TC', serif;
}

`;
const SpanReg = styled.div`
padding-top: 2%;
`;



const Login = props => {
  const {id} = props
  useEffect(() => {
    if(id){
      props.history.push('/tabs')
    }
  },[id])
  const [logini, setLogini] = useState({ username: "", password: "" });
  const changeHandler = event => {
    event.preventDefault();
    setLogini({
      ...logini,
      [event.target.name]: event.target.value
    });
  };
  const handleSubmit = event => {
    event.preventDefault();
    props.login(logini);
    // props.history.push("/tabs");
    // setLogini({ username: "", password: "" });
  };
  return (
    <MainWrapper>
        <Cta>
          <LoginTitle>Tabless Thursday</LoginTitle>
        
        <FormWrapper>
        <form onSubmit={handleSubmit}>
          <input
            className="name"
            placeholder="username"
            type="text"
            value={logini.username}
            name="username"
            onChange={changeHandler}
          />
          <input
            className="password"
            placeholder="password"
            type="password"
            value={logini.password}
            name="password"
            onChange={changeHandler}
          />
          <ButtonWrapper>
          <Button type="submit" >
            Login!
          </Button>
          </ButtonWrapper>
          <SpanReg>
            Dont have an account? <Link to="./Register">Register !</Link>
          </SpanReg>  
        </form>
        </FormWrapper>
        </Cta>
    </MainWrapper>
  );
};


const mapStateToProps = (state) => {
  return {...state}
}

export default connect(mapStateToProps, {login})(Login);
