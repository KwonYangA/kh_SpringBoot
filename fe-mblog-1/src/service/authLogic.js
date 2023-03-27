import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
class AuthLogic {
  constructor() {
    this.auth = getAuth();
    this.googleProvider = new GoogleAuthProvider();
  }
  getUserAuth = () => {
    return this.auth;
  };
  getGoogleAuthProvider = () => {
    return this.googleProvider;
  };
}
export default AuthLogic;

export const onAuthChange = (auth) => {
  return new Promise((resolve) => {
    auth.onAuthStateChanged((user) => {
      resolve(user);
    });
  });
};

//로그아웃 버튼 클릭시 호출하기
export const logout = (auth) => {
  return new Promise((resolve, reject) => {
    auth.signOut().catch((e) => reject(e + "로그아웃 오류입니다."));
    //로그인 성공시 세션 스토리지에 담아둔 정보를 모두 지운다
    sessionStorage.clear();
    //서비스를 더 이상 사용하지 않는 경우 이므로 돌려줄 값은 없다.
    //그래서 파라미터는 비웠다.
    resolve();
  });
}; // end

export const loginGoogle = (auth, googleProvider) => {
  return new Promise((resolve, reject) => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user; //구글에 등록되어있는 profile 정보가 담겨 있음
        console.log("user ===> ", user);
        resolve(user);
      })
      .catch((e) => reject(e));
  });
};
