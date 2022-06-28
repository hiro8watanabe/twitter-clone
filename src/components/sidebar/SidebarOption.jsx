import React from 'react';
import './SidebarOption.css';

function SidebarOption(props) {
  const { text, icon } = props;
  return (
    <div className="sidebar_option">
      {icon}
      <h2>{text}</h2>
    </div>
  );
}

export default SidebarOption;
