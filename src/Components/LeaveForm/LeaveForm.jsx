import React, { useEffect } from "react";
import { convert } from "../../Helpers/misc";
import "./index.css";

export default function LeaveForm(props) {
  const { startDate, endDate, setModel, Model } = props;

  // let button1 = Model === "reportingperson" ? "Approved" : "Apply";
  // let button2 = Model === "reportingperson" ? "Rejected" : "Cancle";

  let button1 = Model === "approvedLeave" ? "Hide" : "Apply";
  let button2 = Model === "approvedLeave" ? "Cancle" : "Cancle";

  console.log(Model, "Model");

  useEffect(() => {
    function handleEscapeKey(event) {
      if (event.code === "Escape") {
        setModel(false);
      }
    }
    document.addEventListener("keydown", handleEscapeKey);
    return () => document.removeEventListener("keydown", handleEscapeKey);
  }, [setModel]);

  return (
    <>
      {" "}
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
            <textarea name="" placeholder="Enter Reason"></textarea>
          </div>
          <div className="modalActions">
            <div className="actionsContainer">
              <button className="Submitbtn">{button1}</button>
              <button className="cancelBtn" onClick={() => setModel(false)}>
                {button2}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
