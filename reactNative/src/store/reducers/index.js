import { combineReducers } from "redux";
import apiReducer from "./apiReducer";
import localReducer from "./localReducer";

// Redux: Root Reducer
const rootReducer = combineReducers({
  apiReducer: apiReducer,
  localReducer: localReducer
});

export default rootReducer;
