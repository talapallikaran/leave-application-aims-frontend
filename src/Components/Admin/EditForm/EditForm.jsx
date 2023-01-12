import React from "react";
import UseForm from "./UseForm";
import "./index.css";

export default function EditForm(props) {
  const { setEditmodel, userdata, AlluserData, token } = props;
  const { handleSubmit, values, setvalues } = UseForm(
    userdata,
    token,
    setEditmodel
  );
  const fiterdata = AlluserData.filter((udata) => udata.name !== values.name);
  return (
    <div>
      <div className="maindiv" onClick={() => setEditmodel(false)}></div>
      <div className="form-popup">
        <p style={{ marginBottom: 0, marginTop: 5 }}>Edit Form</p>
        <button className="closeBtn" onClick={() => setEditmodel(false)}>
          x
        </button>
        <div className="form-inputs">
          <label htmlFor="">UserName</label>
          <br />
          <input
            type="text"
            name="name"
            value={values?.name}
            placeholder="Enter Name"
            onChange={(e) =>
              setvalues((prev) => {
                return {
                  ...prev,
                  name: e.target.value,
                };
              })
            }
            required
          />
          <label htmlFor="">Email Address</label>
          <br />
          <input
            type="text"
            name="email"
            value={values?.email}
            placeholder="Enter email"
            onChange={(e) =>
              setvalues((prev) => {
                return {
                  ...prev,
                  email: e.target.value,
                };
              })
            }
            required
          />
          <br />
          <label htmlFor="">DOB</label>
          <br />
          <input
            type="date"
            name="dob"
            value={values?.dob}
            onChange={(e) =>
              setvalues((prev) => {
                return {
                  ...prev,
                  dob: e.target.value,
                };
              })
            }
            required
          />
          <label htmlFor="">Phone Number</label>
          <br />
          <input
            type="tel"
            name="phone"
            value={values?.phone}
            placeholder="Enter Phone Number"
            onChange={(e) =>
              setvalues((prev) => {
                return {
                  ...prev,
                  phone: e.target.value,
                };
              })
            }
            required
          />
          <label htmlFor="">Reporting to</label>
          <br />
          <select
            name="reporting_person"
            id="reporting"
            onChange={(e) =>
              setvalues((prev) => {
                return {
                  ...prev,
                  reporting_person: e.target.value,
                };
              })
            }
            required
          >
            {userdata?.reporting_person_name ? (
              <>
                {fiterdata?.map((data, id) => {
                  return (
                    <option
                      selected={
                        values?.reporting_person === data.id ? `selected` : ""
                      }
                      key={data.id}
                      value={data.id}
                    >
                      {data.name}
                    </option>
                  );
                })}
              </>
            ) : (
              <>
                <option>select from drodown</option>
                {fiterdata?.map((data, id) => {
                  return (
                    <option key={id} value={data.id}>
                      {data.name}
                    </option>
                  );
                })}
              </>
            )}
          </select>
          <div className="actioncontainer">
            <button className="Submitbtn" onClick={handleSubmit}>
              Submit
            </button>
            <button className="cancelbtn" onClick={() => setEditmodel(false)}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
