import React, { useEffect } from "react";
import LeaveDateBox from "../LeaveDateBox/LeaveDateBox";
import "./index.css";
import { getInitials } from "../../Helpers/misc";
import { useDispatch, useSelector } from "react-redux";
import { Getuser } from "../../Store/Action/GetUserAction";
import { useNavigate } from "react-router";

export default function EmployeeCard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const UserData = useSelector((state) => state?.getUserReducer);
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

  useEffect(() => {
    if (!Login_data?.accessToken) {
      navigate("/");
    }
  }, [UserData]);
  return (
    <div>
      <div className="Leave-Com-Wrapper">
        {UserData?.UserData?.map((userdata, id) => {
          return (
            <div key={id} className="Main-Leave-Div">
              <div className="user-name">
                <p>{getInitials(userdata.name)}</p>
              </div>
              <LeaveDateBox
                userdata={userdata}
                user_id={Login_data?.user_id}
                token={Login_data?.accessToken}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
