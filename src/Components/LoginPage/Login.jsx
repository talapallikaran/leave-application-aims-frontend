import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { userLogin } from "../../Store/Action/AuthAction/index";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Sucessnotify, Failednotify } from "../../Helpers/Toasthelper";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState(null);
  const [password, setpassWord] = useState(null);
  const successLoginData = useSelector((state) => state?.UserLoginReducer);
  const LoginInfo = {
    email: email,
    password: password,
  };
  const handleSubmit = () => {
    dispatch(userLogin(LoginInfo));
  };

  useEffect(() => {
    if (
      email === successLoginData?.LoginData?.email &&
      successLoginData?.LoginData?.statusCode == 200
    ) {
      Sucessnotify();
      setTimeout(() => {
        navigate("/leaveapplication");
      }, 3000);
    }
    if (successLoginData?.FailedLoginData?.statusCode == 401) {
      Failednotify();
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    }
  }, [email, successLoginData]);
  return (
    <div>
      <div className="logingpage">
        <p className="login-text">Login</p>
        <div className="loginform">
          <label htmlFor="">
            <h6>Email:</h6>{" "}
          </label>

          <input
            type="text"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <label htmlFor="">
              <h6>Password:</h6>{" "}
            </label>
            <a href="" style={{ color: "#574CA3", fontWeight: "bold" }}>
              Forgot Password?
            </a>
          </div>
          <input
            type="password"
            id="pass"
            onChange={(e) => setpassWord(e.target.value)}
          />
          <div className="checkbox">
            <input type="checkbox" id="Remember" />
            <label htmlFor="Remember">Remember Me</label>
          </div>
          <div className="actionsContainer">
            <button className="Submitbtn" onClick={handleSubmit}>
              Login
            </button>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
}
