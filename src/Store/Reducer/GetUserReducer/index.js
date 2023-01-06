import { Action } from "@remix-run/router";
import { GET_USER } from "../../ActionTypes";

const initialstate = {
  UserData: [],
};

const getUserReducer = (state = initialstate, action) => {
  console.log("action payload", action.payload);
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        UserData: action.payload,
      };

    default:
      return state;
  }
};
export default getUserReducer;
