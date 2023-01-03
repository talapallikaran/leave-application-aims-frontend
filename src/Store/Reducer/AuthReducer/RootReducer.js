import UserLoginReducer from "../AuthReducer/index"
import { combineReducers } from "redux"
const RootReducer = combineReducers({
    UserLoginReducer:UserLoginReducer,
   
})
export default RootReducer