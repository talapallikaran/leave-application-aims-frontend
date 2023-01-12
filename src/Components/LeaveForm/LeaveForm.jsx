import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ApplyLeave } from "../../Store/Action/ApplyLeaveAction";
import { CancelLeave } from "../../Store/Action/CancelLeaveAction";
import { UpdateLeaveStatus } from "../../Store/Action/UpdateLeaveStatusAction";
import { ApplyleaveSuccessnotify } from "../../Helpers/Toasthelper";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import "./index.css";

export default function LeaveForm(props) {
  const {
    startDate,
    endDate,
    setModel,
    Model,
    reason,
    userID,
    leave_id,
    reporting_person,
    token,
    Login_user_id,
  } = props;
  console.log("login userid", reporting_person, Login_user_id);
  const dispatch = useDispatch();
  const [leavereason, setLeaveReason] = useState(null);
  const [error, setError] = useState(null);
  let button1 = Model === "reportingperson" ? "Approved" : "Apply";
  let button2 = Model === "reportingperson" ? "Rejected" : "cancel";

  useEffect(() => {
    function handleEscapeKey(event) {
      if (event.code === "Escape") {
        setModel(false);
      }
    }
    document.addEventListener("keydown", handleEscapeKey);
    return () => document.removeEventListener("keydown", handleEscapeKey);
  }, [setModel]);

  const Handlereason = (e) => {
    setLeaveReason(e.target.value);
  };

  const HandleCancelLeave = () => {
    console.log("cancelLeave");
    dispatch(CancelLeave(leave_id, token));
    window.location.reload();
  };
  const handleApply = () => {
    if (leavereason === null || leavereason === "") {
      setError("Please Apply The leave Reason ");
    }
    const ApplyleaveData = {
      start_date: startDate,
      end_date: endDate,
      reason: leavereason,
      user_id: userID,
    };
    console.log("Applyleave", ApplyleaveData);
    if (leavereason) {
      setError(null);
      dispatch(ApplyLeave(ApplyleaveData, token));
      ApplyleaveSuccessnotify();
      setTimeout(() => {
        setModel(false);
        window.location.reload();
      }, 3000);
    }
  };

  const handleApproved = () => {
    const Approvedleave = {
      user_id: userID,
      leave_id: leave_id,
      reporting_person: reporting_person,
      status: 2,
    };
    console.log("approved", Approvedleave);
    dispatch(UpdateLeaveStatus(Approvedleave, token));
    window.location.reload();
  };
  const CloseButton = () => {
    setModel(false);
    window.location.reload();
  };
  const RejectedLeave = () => {
    const Rejectedleave = {
      user_id: userID,
      leave_id: leave_id,
      reporting_person: reporting_person,
      status: 3,
    };
    console.log("RejectedLeave", Rejectedleave);
    dispatch(UpdateLeaveStatus(Rejectedleave, token));
    window.location.reload();
  };
  return (
    <>
      {" "}
      <ToastContainer />
      <div className="maindiv" onClick={() => setModel(false)} />
      <div className="model">
        <div className="LeaveModel">
          <h5>Apply For Leave</h5>
          <button className="closeBtn" onClick={() => setModel(false)}>
            x
          </button>
          <div className="modalContent">
            <div>
              <b>
                {" "}
                <p style={{ margin: 0 }}>Start-Date</p>
              </b>
              {startDate}
            </div>
            <div>
              <b>
                {" "}
                <p style={{ margin: 0 }}>End-Date</p>
              </b>
              {endDate}
            </div>
          </div>
          <div className="TeaxArea">
            <b>
              {" "}
              <p style={{ margin: 0 }} htmlFor="">
                Reason
              </p>
            </b>
            <textarea
              name=""
              placeholder="Enter Reason"
              disabled={reason ? true : ""}
              defaultValue={reason}
              onChange={Handlereason}
            ></textarea>
            {error && (
              <p style={{ fontWeight: "600", color: "red" }}>{error}</p>
            )}
          </div>
          <div className="modalActions">
            <div className="actionsContainer">
              {Model === "user" || Model === "reportingperson" ? (
                <>
                  {userID == Login_user_id ||
                  Login_user_id == reporting_person ? (
                    <>
                      {" "}
                      <button
                        className="Submitbtn"
                        onClick={
                          Model == "reportingperson"
                            ? handleApproved
                            : handleApply
                        }
                      >
                        {button1}
                      </button>
                      <button
                        className="rejectedbtn"
                        onClick={
                          Model == "reportingperson"
                            ? RejectedLeave
                            : () => setModel(false)
                        }
                      >
                        {button2}
                      </button>
                    </>
                  ) : (
                    <button className="cancelBtn" onClick={() => CloseButton()}>
                      Close
                    </button>
                  )}
                </>
              ) : (
                <>
                  {userID == Login_user_id ||
                  Login_user_id == reporting_person ? (
                    <>
                      <button
                        className="cancelBtn"
                        onClick={() => CloseButton()}
                      >
                        Close
                      </button>
                      <button className="cancelBtn" onClick={HandleCancelLeave}>
                        CancelLeave
                      </button>
                    </>
                  ) : (
                    <button className="cancelBtn" onClick={() => CloseButton()}>
                      Close
                    </button>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
