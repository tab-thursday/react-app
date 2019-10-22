import React from "react";

const TabLayout = props => {
return (
    <div>
    <h2>{props.tab.name}</h2>
    <p>{props.tab.email}</p>
    <p>{props.tab.role}</p>
    </div>
    );
};
export default TabLayout;