import "@fortawesome/fontawesome-free/js/all.js";
import "react-quill/dist/quill.snow.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ImageUploader from "./service/imageUploader";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { legacy_createStore } from "redux";
import rootReducer from "./redux/rootReducer";
import firebaseApp from "./service/firebase";
import AuthLogic from "./service/authLogic";
import { setAuth } from "./redux/userAuth/action";
//리덕스 적용
const store = legacy_createStore(rootReducer);
//AuthLogic객체 생성하기
const authLogic = new AuthLogic(firebaseApp);
//store에 있는 초기 상태정보 출력하기
store.dispatch(
  setAuth(authLogic.getUserAuth(), authLogic.getGoogleAuthProvider())
);
console.log(store.getState());

//이미지업로드객체생성
const imageUploader = new ImageUploader();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Provider store={store}>
      <BrowserRouter>
        <App imageUploader={imageUploader} />
      </BrowserRouter>
    </Provider>
  </>
);
