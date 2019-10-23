import React, { useState,useEffect } from "react";
import axios from "axios";
import {connect} from 'react-redux';
import {register} from './actions/index';
import styled from 'styled-components';

const size = {
  laptop: '1024px'
}
const device = {
  laptop: `(min-width: ${size.laptop})`
}


const FormWrapper = styled.div`

display:flex;
justify-content: center;
`;

const CTA = styled.div`
box-shadow: 10px 10px 5px gray;
margin-top:18%;
border: 4px solid #00000082;
border-radius: 10px;
padding: 70px 1px 120px 1px;
background-color: #01010c4d
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
const ButtonWrapper = styled.div`
display: flex;
justify-content: center;
`;

const RegTitle = styled.h1`
color: black;
font-size: 2.8rem;
margin: 0;
padding:2%;
padding-bottom: 7%;
font-family: 'Noto Serif TC', serif;
`;
const RegButton = styled.button`
display: flex;
justify-content: center;
padding: 3px 5px 3px 5px;
margin: 3%;
margin-top: 13%;
color: #fffafa;
background: #22283a;
border-radius: 5px;
padding: 4px 8px 4px 8px;
font-size: 0.8rem;
border: 2px solid #dcdcdc;
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
const Input = styled.input`
width: 125%;
border: 1px solid #00000066;
`;



function Register(props) {
  const [loginz, setLoginZ] = useState({username: '', password: '' });
  const {id} = props
  useEffect(() => {
    if(id){
      props.history.push('/tabs')
    }
  },[id])

  const handleSubmit = e => {
    e.preventDefault();
    props.register(loginz)
    // props.history.push("/tabs");
  //  setLoginZ({username: '', password: '' });
   
  };

  return (
    <MainWrapper>
    <CTA>
    <RegTitle>Register</RegTitle>
      <FormWrapper>
      
      <form className="formregister" onSubmit={handleSubmit}>
        
        <Input className='inputregister'
          value={loginz.username}
          name="username"
          type="text"
          onChange={e => setLoginZ({...loginz, username: e.target.value})}
          placeholder="username"
        />
        <Input className='inputregister'
          value={loginz.password}
          name="password"
          type="password"
          onChange={e => setLoginZ({...loginz, password: e.target.value})}
          placeholder="password"
        />
        <ButtonWrapper>
        <RegButton>
          Connect!
        </RegButton>
        </ButtonWrapper>
      </form>
    </FormWrapper>
    </CTA>
    </MainWrapper>
  );
}


const mapStateToProps = (state) => {
  return {...state}
}
export default connect(mapStateToProps, {register})(Register);