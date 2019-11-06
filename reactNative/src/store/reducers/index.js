import { combineReducers } from "redux";
import apiReducer from "./apiReducer";
import userReducer from "./userReducer";

// Redux: Root Reducer
const reducers = combineReducers({
  apiReducer: apiReducer,
  userReducer: userReducer
});

export default reducers;
