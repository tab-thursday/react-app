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
