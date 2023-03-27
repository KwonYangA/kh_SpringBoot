import { DECREASE, INCREASE, RESET, SET_FALSE, SET_MSG } from "./action-type.js";
import { actionCreator } from "./redux.js";

export const increase = () => actionCreator(INCREASE);
export const decrease = () => actionCreator(DECREASE);
export const reset = () => actionCreator(RESET);
export const setToastMsg = (msg) => {
  return {
    type: SET_MSG,
    msg: msg,
    bool: true,
  };
};

export const setToastFalse = () => {
  return {
    type: SET_FALSE,
    msg: "",
    bool: false,
  };
};
