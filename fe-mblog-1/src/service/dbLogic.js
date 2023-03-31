import axios from "axios";

export const qnaListDB = (board) => {
  return new Promise((resolve, reject) => {
    try {
      //axios - 비동기 요청 처리 ajax - fetch(브라우저, 클라이언트사이드) - axios(NodeJS, 서버사이드)
      const response = axios({
        method: "get", //@RequestBody
        url: process.env.REACT_APP_SPRING_IP + "reple/qnaList",
        params: board, //post방식으로 전송시 반드시 data속성 파라미터로 할것
      });
      resolve(response);
      console.log(response.data);
    } catch (error) {
      reject(error);
    }
  });
};

export const qnaInsertDB = (board) => {
  return new Promise((resolve, reject) => {
    console.log(board);
    try {
      const response = axios({
        method: "post", //@RequestBody
        url: process.env.REACT_APP_SPRING_IP + "reple/qnaInsert",
        data: board, //post방식으로 전송시 반드시 data속성 파라미터로 할것
      });
      resolve(response);
      console.log(response.data);
    } catch (error) {
      reject(error);
    }
  });
};
export const uploadImageDB = (file) => {
  console.log(file);
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "post",
        url: process.env.REACT_APP_SPRING_IP + "reple/imageUpload",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        processData: false,
        contentType: false,
        data: file,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};
export const uploadFileDB = (file) => {
  console.log(file);
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "post",
        url: process.env.REACT_APP_SPTING_IP + "reple/fileUpload",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        processData: false,
        contentType: false,
        data: file,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};
export const memberInsertDB = (member) => {
  return new Promise((resolve, reject) => {
    console.log(member);
    try {
      const response = axios({
        method: "post", //@RequestBody
        url: process.env.REACT_APP_SPRING_IP + "member/memberInsert",
        data: member, //post방식으로 전송시 반드시 data속성 파라미터로 할것
      });
      resolve(response);
      console.log(response.data);
    } catch (error) {
      reject(error);
    }
  });
};
//프롭스에 들어오는 member js, 배열
export const memberUpdateDB = (member) => {
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "post", //@RequestBody
        url: process.env.REACT_APP_SPRING_IP + "member/memberUpdate",
        data: member, //post방식으로 전송시 반드시 data속성 파라미터로 할것
      });
      resolve(response);
      console.log(response.data);
    } catch (error) {
      reject(error);
    }
  });
};

export const memberListDB = (params) => {
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "get", //@RequestBody
        url: process.env.REACT_APP_SPRING_IP + "member/memberList",
        params: params, //post방식으로 전송시 반드시 data속성 파라미터로 할것
      });
      resolve(response);
      console.log(response.data);
    } catch (error) {
      reject(error);
    }
  });
};

export const memberDeleteDB = (member) => {
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "get", //@RequestBody
        url: process.env.REACT_APP_SPRING_IP + "member/memberDelet",
        data: member, //post방식으로 전송시 반드시 data속성 파라미터로 할것
      });
      resolve(response);
      console.log(response.data);
    } catch (error) {
      reject(error);
    }
  });
};

/* ---------------------------------[dept]------------------------------------ */
export const deptInsertDB = (dept) => {
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "post", //@RequestBody
        url: process.env.REACT_APP_SPRING_IP + "dept/deptInsert",
        data: dept, //post방식으로 전송시 반드시 data속성 파라미터로 할것
      });
      resolve(response);
      console.log(response.data);
    } catch (error) {
      reject(error);
    }
  });
};

export const deptUpdateDB = (dept) => {
  return new Promise((resolve, reject) => {
    try {
      console.log(dept);
      const response = axios({
        method: "post", //@RequestBody
        url: process.env.REACT_APP_SPRING_IP + "dept/deptUpdate",
        data: dept, //post방식으로 전송시 반드시 data속성 파라미터로 할것
      });
      resolve(response); //요청 처리가 성공일때
      console.log(response.data);
    } catch (error) {
      reject(error);
    }
  });
};

export const deptListDB = (dept) => {
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "get",
        url: process.env.REACT_APP_SPRING_IP + "dept/deptList",
        dept: dept, //쿼리스트링은 header에 담김 - get방식
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

export const jsonMemberListDB = (member) => {
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "get",
        url: process.env.REACT_APP_SPRING_IP + "member/jsonMemberList",
        params: member,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

export const deptDeleteDB = (dept) => {
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "get",
        url: process.env.REACT_APP_SPRING_IP + "dept/deptDelete",
        params: dept, //쿼리스트링은 header에 담김 - get방식
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};
