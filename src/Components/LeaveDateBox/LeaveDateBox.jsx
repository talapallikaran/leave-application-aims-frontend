import React, { useEffect, useState } from "react";
import "./index.css";
// import "react-datepicker/dist/react-datepicker.css";
// import DatePicker from "react-datepicker";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment/moment";
import { enumerateDaysBetweenDates } from "../../Helpers/misc";
import LeaveForm from "../LeaveForm/LeaveForm";
import dummyData from "../EmployeeCard/dummydata.json";

export default function LeaveDateBox(props) {
  const { userdata } = props;
  console.log("userdata", userdata);
  const [value, onChange] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const [Model, setModel] = useState();
  const [daterange, setDateRange] = useState([]);
  console.log("daterange", daterange);

  useEffect(() => {
    if (value.length == 2) {
      setModel(true);
    }
  }, [value]);

  useEffect(() => {
    if (userdata.id) {
      userdata?.leaves.map((leaves) => {
        const startdates = leaves.startdate;
        const enddates = leaves.enddate;
        if (startdates && enddates) {
          const dateRange = enumerateDaysBetweenDates(
            moment(startdates, "DD-MM-YYYY"),
            moment(enddates, "DD-MM-YYYY")
          );
          setDateRange(dateRange);
        }
      });
    }
  }, [userdata]);

  return (
    <div className="Date-picker">
      {value.length == 2 && Model ? (
        <LeaveForm
          value={value}
          startDate={startDate}
          endDate={endDate}
          setModel={setModel}
        />
      ) : (
        ""
      )}
      {/* react - DatePicker  */}
      {/* <DatePicker
        selected={startDate}
        onChange={onChange}
        startDate={startDate}
        endDate={endDate}
        // excludeDates={[addDays(new Date(), 1), addDays(new Date(), 5)]}
        selectsRange
        selectsDisabledDaysInRange
        inline
        tileClassName={({ date, view }) => {
          if(mark.find(x=>x===moment(date).format("DD-MM-YYYY"))){
           return  'highlight'
          }
        }}
    
      />  */}
      {/* React Calander */}
      <Calendar
        onChange={onChange}
        selectRange={true}
        event={userdata}
        value={value}
        tileClassName={({ date }) => {
          if (userdata.id === 4) {
            if (
              daterange.find((x) => x === moment(date).format("DD-MM-YYYY"))
            ) {
              return "highlight";
            }
          }
        }}
      />
    </div>
  );
}
