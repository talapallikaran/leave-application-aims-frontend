import React from "react";
import "./Header.css";
import { UserIcon, LogOut, LeaveUserIcon } from "../../Images/Index";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

export default function Header() {
  const navigate = useNavigate();
  const successLoginData = useSelector((state) => state?.UserLoginReducer);
  const handleLogout = () => {
    alert("Logout Sucessfully");
    localStorage.removeItem();
    navigate("/");
  };
  return (
    <div>
      <div className="Header-Wrapper">
        <div className="Header-Text">
          <p>Apply Leave</p>
        </div>
        {successLoginData?.LoginData ? 
              <div className="User-logout">
          <div className="User-img">
            <img src={LeaveUserIcon} alt="UserIcon" width={33} height={30} />
          </div>
          <div className="log-out">
            <img
              src={LogOut}
              alt="Logout"
              width={30}
              height={30}
              onClick={handleLogout}
            />
          </div>
        </div>  :''}
   
      </div>
    </div>
  );
}
