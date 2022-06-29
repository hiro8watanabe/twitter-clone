import React from 'react';
import './SidebarOption.css';

function SidebarOption(props) {
  const { text, icon, active } = props;
  return (
    <div className={`sidebar_option ${active && "sidebar_option-active"}`}>
      {icon}
      <h2>{text}</h2>
    </div>
  );
}

export default SidebarOption;
