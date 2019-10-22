import React, { useState } from "react";

const CreateTabs = props => {

    const [tab, setTab] = useState({
        name: "",
        url: "",
        role: ""

    });
    const changeHandler = event => {
        setTab({...tab, [event.target.name]: event.target.value});
    };
    const submitForm = event => {
        event.preventDefault();
        props.addNewTab(tab);
        setTab({ name: "", url: "", role: ""})
    }
    return (
      <form onSubmit={submitForm}>
        <label htmlFor="name">Tab Name </label>
        <input
          name="name"
          id="name"
          type="text"
          placeholder=" tab name here"
          onChange={changeHandler}
          value= {tab.name}
        />
        <label for="url">Enter a https:// URL:</label>
        <input type="url" name="url" id="url"
          placeholder="https://example.com"
          pattern="https://.*" size="30"
          required
        />
        <label for="name"> Description: </label>
        <input
          name="role"
          id="role"
          type="text"
          placeholder="Tab description"
          onChange={changeHandler}
          value= {tab.role}
        />
        <button type = "submit"> Submit </button>
      </form>
    )
}

export default CreateTabs;