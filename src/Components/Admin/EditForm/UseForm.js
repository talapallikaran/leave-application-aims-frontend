import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { UpdateUserList } from "../../../Store/Action/UpdateUserList/index";
import { CreateUser } from "../../../Store/Action/CreateUserAction";
const UseForm = (userdata, token, setEditmodel, editmodel, setAddUsermodel) => {
  const dispatch = useDispatch();
  const date = editmodel ? userdata?.dob.split("-").reverse().join("-") : "";
  const [values, setvalues] = useState(
    editmodel
      ? {
          id: userdata.id,
          name: userdata.name,
          email: userdata.email,
          dob: date,
          phone: userdata.phone,
          reporting_person: userdata.reporting_person,
        }
      : null
  );
  console.log("values----->", values);
  const handleSubmit = () => {
    const data = values;
    dispatch(UpdateUserList(data, token));
    setEditmodel(false);
    // window.location.reload();
  };

 
  const handleAdd = () => {
    const formdata = values;
    console.log("adduser");
    dispatch(CreateUser(formdata, token));
  };

  useEffect(() => {
    function handleEscapeKey(event) {
      if (event.code === "Escape") {
        setEditmodel(false);
        setAddUsermodel(false);
      }
    }
    document.addEventListener("keydown", handleEscapeKey);
    return () => document.removeEventListener("keydown", handleEscapeKey);
  }, []);

  return {
    handleSubmit,
    values,
    setvalues,
    handleAdd,
  };
};
export default UseForm;
