import React from "react";
import BlogHeader from "../include/BlogHeader";
import KakaoMap from "../kakao/KakaoMap";
import { ContainerDiv, FormDiv, HeaderDiv } from "../../styles/FormStyle";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const HomePage = () => {
  const navigate = useNavigate()
  const handleLogin = () =>{
    console.log("로그인")
    navigate('/login')
  }
  return (
    <>
      <ContainerDiv>
        <BlogHeader />
        <HeaderDiv>
          <h1 style={{ marginLeft: "10px" }}>블로그</h1>
          <Button onClick={handleLogin}>로그인</Button>
        </HeaderDiv>
        <FormDiv>
          <div>이벤트존</div>
          <hr style={{ height: "2px" }} />
          <div>추천 수업존</div>
          <hr style={{ height: "2px" }} />
          <div><KakaoMap/></div>
          <div>카카오맵존</div>
          <hr style={{ height: "2px" }} />
        </FormDiv>
      </ContainerDiv>
    </>
  );
};

export default HomePage;
