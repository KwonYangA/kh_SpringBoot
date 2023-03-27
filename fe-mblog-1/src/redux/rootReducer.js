import { combineReducers } from "redux";
import userAuth from "./userAuth/reducer";
import toastStatus from "./toastStatus/reducer";

export const rootReducer = combineReducers({
  userAuth,
  toastStatus,
});
export default rootReducer;
