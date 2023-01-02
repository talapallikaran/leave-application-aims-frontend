import React, { useEffect, useState } from "react";
import "./index.css";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import "react-calendar/dist/Calendar.css";
import moment, { ISO_8601 } from "moment/moment";
import { enumerateDaysBetweenDates } from "../../Helpers/misc";
import LeaveForm from "../LeaveForm/LeaveForm";
import dummyData from "../EmployeeCard/dummydata.json";

export default function LeaveDateBox(props) {
  const Userid = 1;
  const { userdata } = props;
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const [Model, setModel] = useState();
  const [activeLeaves, setActiveLeaves] = useState([]);
  const [approvedLeave, setApprovedLeave] = useState([]);
  const [rejected, setRejected] = useState([]);
  const [reportingperson, setReportingperson] = useState([]);

  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  useEffect(() => {
    if (startDate && endDate) {
      setModel(true);
      window.scroll(0, 0);
    }
  }, [startDate && endDate]);

  Array.prototype.getUnique = function () {
    var o = {},
      a = [];
    for (var i = 0; i < this.length; i++) o[this[i]] = 1;
    for (var e in o) a.push(e);
    return a;
  };

  useEffect(() => {
    let dates = [];
    userdata.leaves.map((data, index) => {
      console.log("userdata=======>", userdata.reporting_person);
      if (data.startdate && data.enddate) {
        const daterange1 = enumerateDaysBetweenDates(
          moment(data.startdate, "DD-MM-YYYY"),
          moment(data.enddate, "DD-MM-YYYY")
        );
        dates.push({
          date: daterange1,
          status: data.status,
          reporting_person: userdata.reporting_person,
        });
        console.log("dates=====>", dates);
      }
    });
    const status1 = dates.filter((Fdata) => Fdata.status === 1);
    const status2 = dates.filter((Fdata) => Fdata.status === 2);
    const status3 = dates.filter((Fdata) => Fdata.status === 3);
    const TL = dates.filter(
      (Fdata) => Fdata.reporting_person === Userid && Fdata.status == 1
    );
    console.log("TL===========>", TL);
    if (TL) {
      setReportingperson(
        [].concat
          .apply(
            [],
            TL.map((data) => data.date)
          )
          .getUnique()
      );
    }

    if (status1) {
      setActiveLeaves(
        [].concat
          .apply(
            [],
            status1.map((data) => data.date)
          )
          .getUnique()
      );
    }
    if (status2) {
      setApprovedLeave(
        [].concat
          .apply(
            [],
            status2.map((data) => data.date)
          )
          .getUnique()
      );
    }
    if (status3) {
      setRejected(
        [].concat
          .apply(
            [],
            status3.map((data) => data.date)
          )
          .getUnique()
      );
    }
  }, [userdata]);

  return (
    <div className="Date-picker">
      {startDate && endDate && Model ? (
        <LeaveForm
          startDate={startDate}
          endDate={endDate}
          setModel={setModel}
        />
      ) : (
        ""
      )}
      <DatePicker
        selected={startDate}
        onChange={onChange}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        selectsDisabledDaysInRange
        inline
        dayClassName={(date) => {
          if (
            reportingperson &&
            reportingperson?.includes(
              moment(date, ISO_8601).format("DD-MM-YYYY")
            )
          ) {
            return "Blue";
          }
          if (
            activeLeaves &&
            activeLeaves?.includes(moment(date, ISO_8601).format("DD-MM-YYYY"))
          ) {
            return "isLeaveApplied";
          }
          if (
            approvedLeave &&
            approvedLeave?.includes(moment(date, ISO_8601).format("DD-MM-YYYY"))
          ) {
            return "ApprovedLeave";
          }
          if (
            rejected &&
            rejected?.includes(moment(date, ISO_8601).format("DD-MM-YYYY"))
          ) {
            return "Rejected";
          }
        }}
      />
    </div>
  );
}
