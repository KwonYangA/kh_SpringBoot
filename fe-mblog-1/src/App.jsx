import { Route, Routes, useNavigate } from 'react-router-dom';
import LoginPage from './components/auth/LoginPage';
import KakaoRedirectHandler from './components/kakao/KakaoRedirectHandler';
import Profile from './components/kakao/Profile';
import MemberPage from './components/page/MemberPage';
import HomePage from './components/page/HomePage';
import DeptPage from './components/page/DeptPage';
import DeptDetail from './components/dept/DeptDetail';
import RepleBoardPage from './components/page/RepleBoardPage';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setToastMsg } from './redux/toastStatus/action';
import Toast from './components/Toast';
import SignupPage from './components/auth/SignupPage';
import KhLoginPage from './components/auth/KHLoginPage';
import { onAuthChange } from './service/authLogic';
import { memberListDB } from './service/dbLogic';

function App({ authLogic, imageUploader}) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const ssg = sessionStorage;
  const toastStatus = useSelector(state=>state.toastStatus)
  useEffect(()=>{
    const asyncDB = async () => {
      const auth = authLogic.getUserAuth()
      //현재 인증된 사용자 정보를 가져온다
      const user = await onAuthChange(auth)
      //사용자가 있으면 - userId가 존재하면
      //구글 로그인으로 사용자 정보를 가지고 있을 때
      //user정보가 있으면 sessionStorage에 담는다. -email
      if(user){
        console.log('user정보가 있을 때')
        ssg.setItem('email', user.email)
        const res = await memberListDB({MEM_ID:user.uid, type:'auth'})
        //오라클서버의 회원집합에 uid가 존재하면 - 세션스토리지에 값을 담자
        if(res.data){
          const temp = JSON.stringify(res.data)
          const jsonDoc = JSON.parse(temp)
          ssg.setItem('nickname', jsonDoc[0].MEM_NICKNAME)
          ssg.setItem('status', jsonDoc[0].MEM_STATUS)
          ssg.setItem('auth', jsonDoc[0].MEM_AUTH)
          ssg.setItem('no', jsonDoc[0].MEM_NO)
          navigate("/")
          return //렌더링이 종료******************* 조심해라
        }
        //구글 로그인을 했지만 false일 때 
        else{//오라클서버의 회원집합에 uid가 존재하지 않으면 
        }
      }
      //사용자 정보가 없을 때
      else{
        console.log('user정보가 없을 때')
        if(sessionStorage.getItem('email')){
          sessionStorage.clear()//세션스토리지에 있는 값 모두 삭제하기
          window.location.reload()
        }
      }
    }
  },[dispatch])

  return (
    <>
    <div style={{height:'100vh'}}>
    {toastStatus.status && <Toast />}
    <Routes>
      <Route path='/login' exact={true} element={<KhLoginPage authLogic={authLogic} />}/>
      <Route path='/' exact={true} element={<HomePage />}/>
      <Route path='/auth/signup' exact={true} element={<SignupPage authLogic={authLogic} />}/>
      <Route path='/dept/:gubun' element={<DeptPage imageUploader={imageUploader} />}/>
      <Route path='/repleboard' element={<RepleBoardPage />}/>
      <Route path='/deptdetail/:deptno' element={<DeptDetail imageUploader={imageUploader} />}/>
      <Route path='/auth/kakao/callback' exact={true} element={<KakaoRedirectHandler />}/>
      <Route path='/member' exact={true} element={<MemberPage imageUploader={imageUploader}/>}/>
      <Route path='/profile' exact={true} element={<Profile />}/>
    </Routes>
    </div>
    </>
  );
}

export default App;
