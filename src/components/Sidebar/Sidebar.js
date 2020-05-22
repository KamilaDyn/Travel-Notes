import React from "react";
import "./Sidebar.css";
import travel from "../../assets/Logo.png";
import SidebarNavigation from "./SidebarNavigation";

const Sidebar = ({ closeSidebarFn, show }) => {
  let sidebarClasses = "sidebar";
  if (show) {
    sidebarClasses = "sidebar open";
  }
  return (
    <div className={sidebarClasses} onClick={closeSidebarFn}>
      <div className="contain">
        <div className="image">
          <img src={travel} alt="travel" />
        </div>
        <SidebarNavigation />
        <h2 className="footer">With &#x2764; to Travel</h2>
      </div>
      <div className="bgc"></div>
    </div>
  );
};

export default Sidebar;
