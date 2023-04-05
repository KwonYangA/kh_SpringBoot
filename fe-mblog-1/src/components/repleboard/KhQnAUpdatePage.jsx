import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useCallback } from "react";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import {
  BButton,
  ContainerDiv,
  FormDiv,
  HeaderDiv,
} from "../../styles/FormStyle";
import MyFilter from "./MyFilter";
import QuillEditor from "./QuillEditor";
import { qnaDetailDB, qnaUpdatetDB } from "../../service/dbLogic";

const KhQnAUpdatePage = () => {
  const navigate = useNavigate();
  const { bno } = useParams();
  console.log(bno);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState([]);
  const [secret, setSecret] = useState(false);
  const [tTitle, setTTitle] = useState("일반");
  const [types] = useState(["일반", "결제", "양도", "회원", "수업"]);
  const quillRef = useRef();

  useEffect(() => {
    const qnaDetail = async () => {
      console.log(res.data);
      const board = {
        qna_bno: bno,
      };
      const res = await qnaDetailDB(board);
      const temp = JSON.stringify(res.data); // 문자열 전화
      const jsonDoc = JSON.parse(temp); // 배열 접근 처리
      setTitle(jsonDoc[0].QNA_TITLE);
      setContent(jsonDoc[0].QNA_CONTENT);
      //여기서 parse는 'true'를 boolean true변경
      setSecret(JSON.parse(jsonDoc[0].QNA_SECRET));
      setTTitle(jsonDoc[0].QNA_TYPE);
      //작성자가 아닌데 수정해도 되나?
      if (jsonDoc[0].MEM_NO !== sessionStorage.getItem("no")) {
        //글의 회원번호와 로그 번호가 달라? - 네 다른 사람
        return alert("작성자가 아닙니다.");
      }
      return () => {
        alert("작성하신 글이 아닙니다");
      };
    };
    qnaDetail();
  }, []);

  const handleContent = useCallback((value) => {
    console.log(value);
    setContent(value);
  }, []);

  const handleFiles = useCallback(
    (value) => {
      setFiles([...files, value]);
    },
    [files]
  );

  const handleTitle = useCallback((e) => {
    setTitle(e);
  }, []);

  const handleTTitle = useCallback((e) => {
    setTTitle(e);
  }, []);

  const boardUpdate = async () => {
    if (title.trim() === "||content.trim()===")
      return alert("게시글 수정에 실패했습니다.");
    const board = {
      qna_bno: bno,
      qna_title: title, //useState 훅
      qna_content: content,
      qna_secret: secret ? "true" : "false",
      qna_type: tTitle,
    };
    const res = await qnaUpdatetDB(board);
    if (!res.data) return alert("게시판 수정에 실패하였습니다.");
    navigate("/qna/list");
  };

  return (
    <>
      <ContainerDiv>
        <HeaderDiv>
          <h3 style={{ marginLeft: "10px" }}>QNA 글수정</h3>
        </HeaderDiv>
        <FormDiv>
          <div style={{ width: "100%", maxWidth: "2000px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "10px",
              }}
            >
              <h2>제목</h2>
              <div style={{ display: "flex" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginRight: "10px",
                    alignItems: "center",
                  }}
                >
                  <span style={{ fontSize: "14px" }}>비밀글</span>
                  <Form.Check
                    type="switch"
                    id="custom-switch"
                    checked={secret === true ? true : false}
                    readOnly
                    style={{ paddingLeft: "46px" }}
                    onClick={() => {
                      setSecret(!secret);
                    }}
                  />
                </div>
                <MyFilter
                  types={types}
                  id={"qna_type"}
                  title={tTitle}
                  handleTitle={handleTTitle}
                ></MyFilter>
                <BButton
                  style={{ marginLeft: "10px" }}
                  onClick={() => {
                    boardUpdate();
                  }}
                >
                  글수정
                </BButton>
              </div>
            </div>
            <input
              id="dataset-title"
              type="text"
              placeholder="제목을 입력하세요."
              defaultValue={title}
              style={{
                width: "100%",
                height: "40px",
                border: "1px solid lightGray",
              }}
              onChange={(e) => {
                handleTitle(e.target.value);
              }}
            />
            <hr />
            <h3 style={{ textAlign: "left", marginBottom: "10px" }}>
              상세내용
            </h3>
            <QuillEditor
              value={content}
              handleContent={handleContent}
              quillRef={quillRef}
              files={files}
              handleFiles={handleFiles}
            />
          </div>
        </FormDiv>
      </ContainerDiv>
    </>
  );
};

export default KhQnAUpdatePage;
