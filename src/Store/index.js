import RootReducer from "./Reducer/AuthReducer/RootReducer";
import thunk from "redux-thunk";
import { applyMiddleware, createStore } from 'redux'


const store = createStore(RootReducer,applyMiddleware(thunk))
export  default store   