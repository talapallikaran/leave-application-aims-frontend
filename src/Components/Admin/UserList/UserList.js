import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AdminUserList } from "../../../Store/Action/AdminUserList/index";
import EditForm from "../EditForm/EditForm";
import LeftnavigationBar from "../LeftnavigationBar/LeftnavigationBar";
import Header from "../../Header/Header";
import "./index.css";

export default function UserList() {
  const dispatch = useDispatch();
  const [editmodel, setEditmodel] = useState(false);
  const successLoginData = useSelector((state) => state?.UserLoginReducer);
  const UserList = useSelector((state) => state?.AdminUserListReducer);
  if (successLoginData?.LoginData?.accessToken) {
    localStorage.setItem(
      "LoginData",
      JSON.stringify(successLoginData?.LoginData)
    );
  }
  const Login_data = JSON.parse(localStorage.getItem("LoginData"));
  useEffect(() => {
    dispatch(AdminUserList(Login_data?.accessToken));
  }, [Login_data?.accessToken]);

  return (
    <>
    <Header token={Login_data?.accessToken} />
    <div style={{ display: "flex", flex: 1 }}>
      {" "}
      <LeftnavigationBar />
      <div className="wrapper">
        {editmodel ? (
          <EditForm
            setEditmodel={setEditmodel}
            userdata={editmodel}
            AlluserData={UserList?.AdminUserList}
            token={Login_data?.accessToken}
          />
        ) : (
          ""
        )}
        <div>
          <p> Users Details</p>
        </div>
        <div className="usertable">
          <table style={{ width: "100%" }}>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>DOB</th>
              <th>Phone</th>
              <th>Reporting Person</th>
              <th>Edit</th>
            </tr>
            {UserList?.AdminUserList.map((udata, id) => (
              <tr key={id}>
                <td>{udata.name}</td>
                <td>{udata.email}</td>
                <td>{udata.dob}</td>
                <td>{udata.phone}</td>
                <td>
                  {udata.reporting_person_name
                    ? udata.reporting_person_name
                    : "N/A"}
                </td>
                <td>
                  <button
                    className="editbtn"
                    onClick={() => setEditmodel(udata)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </div>
    </>
  );
}
