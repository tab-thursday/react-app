
import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {loadTabs} from './actions/index';
const Tabs = ({id,loadTabs,tabs}) => {
useEffect(() => {
  loadTabs(id)
}, [loadTabs,id])
return (
  <div>
    {tabs.map(tab => {
      return (
        <>
      <p>{tab.url}</p>
      <p>{tab.name}</p>
      <p>{tab.notes}</p>
      <p>{tab.category}</p>
      </>
      )
    })}
  </div>
)
}
const mapStateToProps = (state) => {
  return {...state}
}
export default connect(mapStateToProps, {loadTabs})(Tabs);



// import React, {useState} from "react";
// import TabsFooter from "./TabsFooter";
// import TabsHeader from "./TabsHeader";
// import CreateTab from "./CreateTab";
// import TabLayout from "./TabLayout";

// const Tabs = () => {
//   const [tab, setTab] = useState([])

//   const addNewTab = note => {
//     setTab([...tab, note])
//   }
//   return (
//     <div>
//       <TabsHeader/>
//       <CreateTab addNewTab= {addNewTab}/>
//       {tab.map((tab, i) => <TabLayout tab = {tab} key = {i}/>)}
//       <TabsFooter/>
//     </div>
//   )
// }

// const mapStateToProps = (state) => {
//    return {...state}
// }

// export default connect(mapStateToProps, {loadTabs})(Tabs);
