import React, { useEffect } from "react";
import LeaveDateBox from "../LeaveDateBox/LeaveDateBox";
import "./index.css";
import dummyData from "./dummydata.json";
import { getInitials } from "../../Helpers/misc";
import { useDispatch, useSelector } from "react-redux";
import { Getuser } from "../../Store/Action/GetUserAction";

export default function EmployeeCard() {
  const dispatch = useDispatch();
  const UserData = useSelector((state) => state?.getUserReducer);
  console.log("userdata======>", UserData?.UserData);
  const successLoginData = useSelector((state) => state?.UserLoginReducer);

  if (successLoginData?.LoginData?.accessToken) {
    localStorage.setItem(
      "LoginData",
      JSON.stringify(successLoginData?.LoginData)
    );
  }
  const Login_data = JSON.parse(localStorage.getItem("LoginData"));
  useEffect(() => {
    dispatch(Getuser(Login_data?.accessToken));
  }, [Login_data?.accessToken]);

  return (
    <div>
      {/* <div className="Leave-Com-Wrapper">
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
      </div> */}
      <div className="Leave-Com-Wrapper">
        {UserData?.UserData?.map((userdata, id) => {
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
