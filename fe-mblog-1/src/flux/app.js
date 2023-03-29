//Flux Architecture - One way binding

//콜백함수
//document.querySelector("#root").addEventListener('click', function(){})

//선언 - 일급객체시민 - 함수를 파라미터로 넘김, 리턴으로 넘김
const createStore = () => {
  console.log(worker);
  //외부함수에서 선언한 변수를 내부함수에서 사용 가능
  let state; //  state.js - 상태 관리가 필요한 변수 꾸러미
  //구독신청한 이벤트들의 꾸러미 담기
  let handlers = [];
  const subscribe = (handler) => {
    handlers.push(handler);
  };
  //외부에서 구독신청을 한 회원들에게 알림처리 - 구독발행 모델 패턴 적용한다
  //위에서 선언된 상태 정보를 담은 변수를 새로운 상태정보로 치환
  //내부 함수 - 클로저
  const send = (action) => {
    //worker함수의 파라미터로 state를 두는 건 기존에 상태정보에 추가된 상태정보 변경 사항을 담기 위함
    //let state;선언된 변수에 새로운 상태정보가 추가된 상태
    state = worker(state, action);
    handlers.forEach((handler) => handler());
  };

  const getState = () => {
    //react-redux제공
    return state; //네가 관리하는 상태값 모두를 말함 - {}객체리터럴
  };
  return {
    getState,
    send,
    subscribe,
  };
};

const worker = (state = { count: 0 }, action) => {
  //state가 undefined가 되면 안되니까 객체리터럴로 대입해줌
  //아래와 같이 store에 내부함수를 외부에서 호출하려면 return에 반드시 등록할 것
  //여기서 상태를 바꾸면 createStore에 있는 state의 참조무결성이 깨짐
  //redux에서는 반드시 이 worker 즉 상태를 바꾸는 함수는 새로운 상태를 반환해라
  switch (action.type) {
    case "increase":
      return { ...state, count: state.count + 1 };
    default:
      return { ...state };
  } //원본이 지켜짐 -> 새로운 객체가 만들어짐 - 깊은복사
};
//스토어 함수 호출하기
//const store = legacy_createStore(reducer)
//상태는 createStore함수 안에 있다 - 6번 라인에
//누가 이상태를 변경하고 읽어 가나요? - UI 컴포넌트
//worker함수의 switch 문에서 action.type에 따라서 상태를 변경하거나 읽어낸다
//변경되고 읽어낸 정보는 return으로 처리했다
//store를 모아서 상태의 묶음을 넘겨줄거야
const store = createStore(worker);
store.subscribe(() => {
  console.log(store.getState);
});
store.send({ type: "increase" });
console.log(store.getState());
store.send({ type: "increase" });
console.log(store.getState());

//store.send();
//console.log(store.state)이렇게는 새로운 상태값을 확인 불가함
//console.log(store.getState());
//console.log(store.getState());
//store.send(); //시그널을 주어야 한다
//console.log(store.getState());

/*
  UI한테는 직접적인 상태를 주지 않을 거야
  불변성을 지킥기 위해
  그래서 여기서 return하는 것에는 state를 주지 않겠다는 것

  문제제기
  느닷없이 맥락없이 1을 증가하는 컨셉
*/
