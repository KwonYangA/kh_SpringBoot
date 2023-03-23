import "@fortawesome/fontawesome-free/js/all.js";
import "react-quill/dist/quill.snow.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ImageUploader from "./service/imageUploader";
import "bootstrap/dist/css/bootstrap.min.css";

//리덕스 추가 - store 생성
//createStore호출

const imageUploader = new ImageUploader();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
      <App imageUploader={imageUploader} />
    </BrowserRouter>
  </>
);
