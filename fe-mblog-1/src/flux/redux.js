
//순서대로 퍼리할 필요가 있음 - 커링함수 패턴 적용
export const actionCreator = (type) => (payload) => ({
  //첫번째 파라미터가 두번째 파라미터에 의존관계가 있다.
  type,
  payload,
});

export const createStore = (reducer) => {
  let state;
  let handlers = [];

  const dispatch = (action) => {
    console.log("dispatch호출");
    state = reducer(state, action);
    handlers.forEach((handler) => handler());
  };

  const subscribe = (handler) => {
    handlers.push(handler);
  };

  const getState = () => {
    return state;
  };
  
  return {
    dispatch, // 함수 == 객체, 파라미터로 들어온 상태를 받아 가공해서 새로운 객체로 내보냄
    getState, // 함수 상태 정보를 담은 state반환해줌
    subscribe,
  };
};
