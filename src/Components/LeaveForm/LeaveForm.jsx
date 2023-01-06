import React, { useEffect } from "react";
import { convert } from "../../Helpers/misc";
import "./index.css";

export default function LeaveForm(props) {
  const { startDate, endDate, setModel, Model, reason } = props;
  console.log("Model", Model);

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

  const CloseButton = () => {
    console.log("close");
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
            ></textarea>
          </div>
          <div className="modalActions">
            <div className="actionsContainer">
              {Model === "user" || Model === "reportingperson" ? (
                <>
                  <button className="Submitbtn">{button1}</button>
                  <button className="cancelBtn" onClick={() => CancelButton()}>
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <button className="cancelBtn" onClick={() => CloseButton()}>
                    Close
                  </button>
                  <button className="cancelBtn">CancelLeave</button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
