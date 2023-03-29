import axios from "axios";

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
