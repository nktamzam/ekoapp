// Imports: Dependencies
import { combineReducers } from "redux";
// Imports: Reducers
import apiReducer from "./apiReducer";
import userReducer from "./userReducer";

// Redux: Root Reducer
const reducers = combineReducers({
  apiReducer: apiReducer,
  userReducer: userReducer
});
// Exports
export default reducers;
