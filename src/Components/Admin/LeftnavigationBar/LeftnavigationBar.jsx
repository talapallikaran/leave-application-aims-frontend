import React from "react";
import "./index.css";

export default function LeftnavigationBar() {
  return (
    <div className="Wrapper">
      <div className="sidebar">
        <div className="List">
          <a href="">
            <span className="icon">
              <i className="fas fa-home"></i>
            </span>
            <span className="item">Profile</span>
          </a>
        </div>
        <div className="List">
          <a href="">
            <span className="icon">
              <i className="fas fa-home"></i>
            </span>
            <span className="item">User</span>
          </a>
        </div>
      </div>
    </div>
  );
}
