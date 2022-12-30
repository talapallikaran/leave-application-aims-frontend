import React from "react";
import "./Header.css";
import { UserIcon, LogOut,LeaveUserIcon } from "../../Images/Index";

export default function Header() {
  return (
    <div>
      <div className="Header-Wrapper">
        <div className="Header-Text">
          <p>Apply Leave</p>
        </div>
        <div className="User-logout">
          <div className="User-img">
            <img src={LeaveUserIcon} alt="UserIcon" width={33} height={30} />
          </div>
          <div className="log-out">
            <img src={LogOut} alt="Logout" width={30} height={30} />
          </div>
        </div>
      </div>
    </div>
  );
}
