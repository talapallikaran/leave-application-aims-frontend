import React from "react";
import "./Header.css";
import { LogOut, LeaveUserIcon } from "../../Images/Index";
import { useNavigate } from "react-router";


export default function Header(props) {
  const { token } = props;
  const navigate = useNavigate();

  const handleLogout = () => {
    alert("logout successfully");
    navigate("/");
    localStorage.clear();
    window.location.reload();
  };
  return (
    <div>
      <div className="Header-Wrapper">
        <div className="Header-Text">
          <p>Apply Leave</p>
        </div>
        {token ? (
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
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
