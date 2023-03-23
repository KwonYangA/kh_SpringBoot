import { DECREASE, INCREASE, RESET } from "./action-type.js";
import { actionCreator } from "./app.js";

export const increase = () => actionCreator(INCREASE);
export const decrease = () => actionCreator(DECREASE);
export const reset = () => actionCreator(RESET);
