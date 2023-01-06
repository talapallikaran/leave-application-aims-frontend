import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ApplyLeave } from "../../Store/Action/ApplyLeaveAction";
import { CancelLeave } from "../../Store/Action/CancelLeaveAction";
import { ApplyleaveSuccessnotify } from "../../Helpers/Toasthelper";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import "./index.css";

export default function LeaveForm(props) {
  const { startDate, endDate, setModel, Model, reason, userID ,leave_id} = props;
  console.log("Model", Model);
  const dispatch = useDispatch();
  const [leavereason, setLeaveReason] = useState(null);
  const [error, setError] = useState(null);
  let button1 = Model === "reportingperson" ? "Approved" : "Apply";

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
    dispatch(CancelLeave(leave_id));
    window.location.reload()
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
      dispatch(ApplyLeave(ApplyleaveData));
      ApplyleaveSuccessnotify();
      setTimeout(() => {
        setModel(false);
      }, 3000);
      window.location.reload();
    }
  };

  const handleApproved = () => {
    console.log("approved");
  };
  const CloseButton = () => {
    setModel(false);
    window.location.reload();
  };
  const CancelButton = () => {
    setModel(false);
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
                  <button
                    className="Submitbtn"
                    onClick={
                      Model == "reportingperson" ? handleApproved : handleApply
                    }
                  >
                    {button1}
                  </button>
                  <button className="cancelBtn" onClick={() => CancelButton()}>
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <button className="cancelBtn" onClick={() => CloseButton()}>
                    Close
                  </button>
                  <button className="cancelBtn" onClick={HandleCancelLeave}>
                    CancelLeave
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
