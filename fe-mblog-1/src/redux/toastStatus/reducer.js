import { SET_FALSE, SET_MSG } from "./action";
import { toastStatus } from "./state";

//아래 toastInfo 함수이름을 직접 사용하지 않는다.
export default function toastInfo(state = toastStatus, action) {
  switch (action.type) {
    case SET_MSG:
      return { ...state, status: action.bool, msg: action.msg };
    case SET_FALSE:
      return { ...state, status: action.bool, msg: action.msg };
    default:
      return { ...state };
  }
}
