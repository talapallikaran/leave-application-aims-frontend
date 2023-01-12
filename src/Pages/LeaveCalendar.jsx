import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { EmployeeCard } from "../Components/EmployeeCard";
import { UserSessionExpire } from "../Helpers/Toasthelper";
import { useNavigate } from "react-router";

export default function LeaveCalendar() {
  const navigate = useNavigate();
  const UserData = useSelector((state) => state?.getUserReducer);

  UserSessionExpire();
  useEffect(() => {
    if (UserData?.AutherationError?.statusCode) {
      console.log("session expire");
      setTimeout(() => {
        navigate("/");
        localStorage.clear();
        window.location.reload();
      }, 3000);
    }
  }, [UserData.AutherationError.statusCode]);

  return (
    <div>
      <EmployeeCard />
    </div>
  );
}
