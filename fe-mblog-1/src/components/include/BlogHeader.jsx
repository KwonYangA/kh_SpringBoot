import React, { useEffect, useState } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../service/authLogic";

const BlogHeader = ({ authLogic }) => {
  //로그아웃버튼을 추가
  //왜 일반변수가 아닌 상태훅에 담는 것인가?
  //상태훅에 관리하면 화면에 즉시 반영 됨
  //인증(front-end -> sessionStorage, back-end-> session: cpu cache메모리)과  인가 구분할 수 있다.
  //동기화 처리 필요함 - 어려움
  const navigate = useNavigate();
  const auth = authLogic.getUserAuth(); //firebase/auth에서 주입해줌
  const [email, setEmail] = useState();
  //의존성배열이란?...실행문(변수선언, 제어문)이 재요청되는 기준임
  //빈배열일땐 딱 한 번만 호출됨
  //빈배열을 삭제하면 글자하나만 입력받아도 재요청이 일어난다- 비효율적
  //리렌더링 발생 경우 - 1)상태훅, 2)props 3)부모컴포넌트가 변경되면->
  useEffect(() => {
    setEmail(sessionStorage.getItem("email"));
  }, []); //의존성배열 - useMemo, useCallback(메모이제이션 - 효율성 - 실전)
  return (
    <>
      <Navbar bg="dark" variant="dark" style={{ color: "white" }}>
        <Container fluid>
          <Link to="/" className="nav-link">
            TerrGYM
          </Link>
          <Nav className="me-auto">
            <Link to="/home" className="nav-link">
              Home
            </Link>
            <Link to="/dept/0" className="nav-link">
              부서관리
            </Link>
            <Link to="/board" className="nav-link">
              게시판
            </Link>
            <Link to="/reple/board" className="nav-link">
              댓글형게시판
            </Link>
          </Nav>
          {/* js와  jsx 섞어쓰기 */}
          {/* null, undefined 조심하기 */}
          {email && (
            <Button
              variant="primary"
              onClick={() => {
                logout(auth);
                navigate("/login");
                window.location.reload();
              }}
            >
              Logout
            </Button>
          )}
        </Container>
      </Navbar>
      <br />
    </>
  );
};

export default BlogHeader;
