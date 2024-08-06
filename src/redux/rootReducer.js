import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import authReducer from "./auth/authSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  counter: counterReducer,
});

export default rootReducer;
