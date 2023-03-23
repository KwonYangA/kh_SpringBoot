import * as ActionType from "./action-type.js";
//store에서 관리해야 하는 상태값의 종류가 점점 늘어나겠지
// -객체 리터럴 - 열거형연산자 - n개 - 초기화
const initializeState = { count: 0 }; // let state

export const reducer = (state = initializeState, action) => {
  switch (action.type) {
    case ActionType.INCREASE:
      return { ...state, count: state.count + 2 };
    case ActionType.DECREASE:
      return { ...state, count: state.count - 1 };
    default:
      return { ...state };
  }
};
