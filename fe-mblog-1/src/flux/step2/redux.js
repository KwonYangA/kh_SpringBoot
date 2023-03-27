//type을 정의하는 규칙- 커링함수
//매개변수 분할 처리
//첫번째 파라미터 타입, 두번째 파라미터 data받아오는 인자
//payload - 수화물
//개발자가 정의한 data나 에러처리에 필요한 메시지값
//요청에 대한 응답 메시지로 사용이 가능함 - Toast
//실제 서비스에서는 필요없음 - react-redux
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
