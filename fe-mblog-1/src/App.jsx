import { Route, Routes } from 'react-router-dom';
import LoginPage from './components/auth/LoginPage';
import KakaoRedirectHandler from './components/kakao/KakaoRedirectHandler';
import Profile from './components/kakao/Profile';
import MemberPage from './components/page/MemberPage';
import HomePage from './components/page/HomePage';
import DeptPage from './components/page/DeptPage';
import DeptDetail from './components/dept/DeptDetail';
import RepleBoardPage from './components/page/RepleBoardPage';
import Signup from './components/member/Signup';


import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setToastMsg } from './redux/toastStatus/action';
import Toast from './components/Toast';

function App({imageUploader}) {
  const dispatch = useDispatch()
  const toastStatus = useSelector(state=>state.toastStatus)
  useEffect(()=>{
    dispatch(setToastMsg('회원가입 하세요!!'))
  },[])
  return (
    <>
    <div style={{height:'100vh'}}>
    {toastStatus.status && <Toast />}
    <Routes>
      <Route path='/login' exact={true} element={<LoginPage />}/>
      <Route path='/' exact={true} element={<HomePage />}/>
      <Route path='/member/signup' exact={true} element={<Signup />}/>
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
