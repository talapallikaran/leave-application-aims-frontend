import UserLoginReducer from "./AuthReducer/index";
import getUserReducer from "./GetUserReducer/index";
import ApplyLeaveReducer from './ApplyLeaveReducer/index'
import CancelLeaveReducer from './CancelLeaveReducer/index'
import { combineReducers } from "redux";
const RootReducer = combineReducers({
  UserLoginReducer: UserLoginReducer,
  getUserReducer: getUserReducer,
  ApplyLeaveReducer:ApplyLeaveReducer,
  CancelLeaveReducer:CancelLeaveReducer
});
export default RootReducer;
