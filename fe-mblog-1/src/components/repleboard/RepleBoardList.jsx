import React, { useEffect, useState } from "react";
import { qnaListDB } from "../../service/dbLogic";
import RepleBoardRow from "./RepleBoardRow";

//고려사항 - 상위 컴포넌트에서 하위 컴포넌트로만 props 전달이 가능한 점
//일반적으로는 가급적 상위 컴포넌트에 두는 것을 추천함
//중급 - 하위 컴포넌트에서 일어난 상태 변화를 상위 컴포넌트에 반영할 수 있는 사람
//리렌더링 - useEffect, useMemo(값), useCallback(함수) - 의존성배열을 갖는다
//[] - 맨 처음 딱 한번
//의존성배열이 없으면 코딩 할때마다 호출
//의존성배열에 입력한 변수가 바뀔때마다 호출 - 다중처리 - 주의 지변XXX, 전변만가능!!!
const RepleBoardList = () => {
  const [board, setBoard] = useState({
    cb_gubun: "qna_title",
    keyword: "PT10회권 양도합니다",
  });
  const [boards, setBoards] = useState([{}]);
  useEffect(() => {
    const qnaList = async () => {
      //비동기처리 요청
      const res = await qnaListDB(board); //async가 있을 때 await 사용가능함
      console.log(res.data);
      setBoards(res.data);
    };
    qnaList();
  }, [board]);

  return (
    <>
      {boards &&
        boards.map((item, index) => <RepleBoardRow key={index} item={item} />)}
    </>
  );
};
export default RepleBoardList;
