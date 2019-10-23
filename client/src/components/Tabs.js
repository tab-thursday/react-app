import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {loadTabs, addTabs,logout, deleteTab,updateTab} from './actions/index';
import styled from 'styled-components';


const Button = styled.button`
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
`;

const ButtonWrapper = styled.div`
display: flex;
justify-content: center;
flex-direction:row;

`;

const FormWrapper = styled.form`
display: flex;
justify-content: center;
padding-bottom: 2%;
`;

const Input = styled.input`
width: 100%;
`;

const CardWrap = styled.section`
display: inline-grid;
padding: 10px;
`;

const Card = styled.div`
transition: transform 0.2s ease-in;
border-radius: 50px;
background: gray;
color: white;
width: 400px;
height: 375px;
max-height: 350px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
margin-bottom: 30px;
padding-top: 30px;
cursor: pointer;
box-shadow: 0px 6px 10px -2px black;
&:hover {
    transform: translateY(-2px) scale(1.2);
    background: lightgray;
    color: black;
`;
const Ps = styled.a`
font-weight: 600;
font-family: 'Noto Serif TC', serif;
`;

const ButtonWrap = styled.div`
display:flex;
justify-content: center;
flex-direction: row;
`;







const Tabs = ({id,loadTabs,tabs,addTabs,logout,history,deleteTab,updateTab}) => {

  const handleLogout = () => {
    logout()
    history.push('/');
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  const [tabForm, setTabForm] = useState({url: '',name: '',notes: ''});
  const [editTab, setEditTab] = useState(null);
  
  const handleChange = e => {
    setTabForm(
      {
        ...tabForm,
        [e.target.name]: e.target.value
      }
    )
  }
  const handleSubmit = e => {
    e.preventDefault();
    if(editTab){
      updateTab(id, editTab.id, tabForm)
    }else{
      addTabs(id,tabForm);
    }
  }
  const handleEdit = (tab) => {
    setEditTab(tab)
  }
  
  useEffect(() => {
   loadTabs(id)
  }, [loadTabs,id])

  useEffect(() => {
    if(editTab){
      setTabForm({name: editTab.name, url:editTab.url, notes: editTab.notes})
    }
  },[editTab])
  return (
    <div>
      <h1>Create Tab</h1>
      <FormWrapper>
      <form onSubmit={handleSubmit}>
        <Input type ='text' name='url' value={tabForm.url} onChange={handleChange} placeholder = 'Url'></Input>
        <Input type ='text' name='name' value={tabForm.name} onChange={handleChange} placeholder= 'Name'></Input>
        <Input type ='text' name='notes' value={tabForm.notes} onChange={handleChange} placeholder= 'Notes'></Input>
        <ButtonWrapper>
        <Button type = 'submit'>Submit</Button>
        <Button onClick={() => {handleLogout()}}>Logout</Button>
        </ButtonWrapper>
      </form>
      </FormWrapper>
      
      {tabs.map(tab => {
        return (
        <CardWrap>
        <Card>
        <Ps href= {tab.url}>{tab.url}</Ps>
        <Ps>{tab.name}</Ps>
        <Ps>{tab.notes}</Ps>
        <ButtonWrap>
        <Button onClick={() => deleteTab(id, tab.id)}>Delete Tab</Button>
        <Button onClick={() => {handleEdit(tab)} }>Edit Tab</Button>
        </ButtonWrap>
        </Card>
        </CardWrap>
        )
      })}
      
    </div>
  )
}

const mapStateToProps = (state) => {
   return {...state}
}

export default connect(mapStateToProps, {loadTabs,addTabs,logout, deleteTab,updateTab})(Tabs);
