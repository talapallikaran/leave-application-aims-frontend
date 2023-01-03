import React, { useState } from "react";
import "./Login.css";
import {userLogin} from '../../Store/Action/AuthAction/index' 
import { useDispatch, useSelector } from "react-redux";

export default function Login() {
  const [email, setEmail] = useState(null);
  const [password, setpassWord] = useState(null);
  const dispatch = useDispatch()

  const LoginInfo = {
    email:email,
    password:password
  }
 const handleSubmit = () => {
  dispatch(userLogin(LoginInfo))
 }
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
            <button className="Submitbtn" onClick={handleSubmit}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}
