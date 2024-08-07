import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import authReducer from "./auth/authSlice";
import productReducer from "./product/productSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  counter: counterReducer,
  product: productReducer,
});

export default rootReducer;