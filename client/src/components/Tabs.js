import React, {useState} from "react";
import TabsFooter from "./TabsFooter";
import TabsHeader from "./TabsHeader";
import CreateTab from "./CreateTab";
import TabLayout from "./TabLayout";

const Tabs = () => {
  const [tab, setTab] = useState([])

  const addNewTab = note => {
    setTab([...tab, note])
  }
  return (
    <div>
      <TabsHeader/>
      <CreateTab addNewTab= {addNewTab}/>
      {tab.map((tab, i) => <TabLayout tab = {tab} key = {i}/>)}
      <TabsFooter/>
    </div>
  )
}

export default Tabs;
