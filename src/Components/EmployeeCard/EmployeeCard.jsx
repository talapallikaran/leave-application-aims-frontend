import React from "react";
import LeaveDateBox from "../LeaveDateBox/LeaveDateBox";
import "./index.css";
import dummyData from "./dummydata.json";
import { getInitials } from "../../Helpers/misc";

export default function EmployeeCard() {
  return (
    <div>
      <div className="Leave-Com-Wrapper">
        {dummyData.map((userdata, id) => {
          return (
            <div key={id} className="Main-Leave-Div">
              <div className="user-name">
                <p>{getInitials(userdata.name)}</p>
              </div>
              <LeaveDateBox userdata={userdata} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
