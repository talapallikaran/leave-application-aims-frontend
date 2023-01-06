import UserLoginReducer from "./AuthReducer/index";
import getUserReducer from "./GetUserReducer/index";
import { combineReducers } from "redux";
const RootReducer = combineReducers({
  UserLoginReducer: UserLoginReducer,
  getUserReducer: getUserReducer,
});
export default RootReducer;
