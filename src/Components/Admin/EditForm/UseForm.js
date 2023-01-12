import { useState } from "react";
import { useDispatch } from "react-redux";
import { UpdateUserList } from "../../../Store/Action/UpdateUserList/index";
const UseForm = (userdata, token, setEditmodel) => {
  const dispatch = useDispatch();
  const date = userdata?.dob.split("-").reverse().join("-");
  const [values, setvalues] = useState({
    id: userdata.id,
    name: userdata.name,
    email: userdata.email,
    dob: date,
    phone: userdata.phone,
    reporting_person: userdata.reporting_person,
  });

  const handleSubmit = () => {
    const data = values;
    dispatch(UpdateUserList(data, token));
    setEditmodel(false);
    window.location.reload();
  };
  return {
    handleSubmit,
    values,
    setvalues,
  };
};
export default UseForm;
