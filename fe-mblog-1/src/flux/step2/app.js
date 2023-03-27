import { decrease, increase, setToastFalse, setToastMsg } from "./action.js";
import { reducer } from "./reducer.js";
import { createStore } from "./redux.js";

//work함수 -> reducer 명을 바꿈

//사용-호출 - store생성하기 - index.js -리액트
//모든 전역 state를 넣어서 관리하고 싶다
//app.js에 있는 코드가 리액트 컴포넌트에 써야하는 코드임
//문제제기 - app.js 하나에 모두 있을 때는 파라미터에 reducer(구:worker)파라미터로 넘겨준다.

/* export const actionCreator = (type) => (payload) => ({
  type,
  payload,
}); */

const store = createStore(reducer);
//index.js에서 생성할 것임-props대신 중앙에서 즉시 한번에 가져다 사용

store.subscribe(function () {
  console.log(store.getState()); //변경된 상태값 찍기(확인용)
  const state = store.getState();
  //getState()는 useSelector(state => state.userAuth) - 상태값을 store에서 읽어들일 때 사용함
  document.querySelector("#count").append(state.count);
  document.querySelector("#msg").append(state.msg);
});

store.dispatch(increase()); //시그널 주기 - action - 리액트 useDispatcher
store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(setToastMsg("관리자에게 문의하세요"));
store.dispatch(setToastFalse());
