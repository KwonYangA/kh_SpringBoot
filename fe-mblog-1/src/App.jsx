import { Route, Routes } from 'react-router-dom';
import LoginPage from './components/auth/LoginPage';
import KakaoRedirectHandler from './components/kakao/KakaoRedirectHandler';
import Profile from './components/kakao/Profile';
import MemberPage from './components/page/MemberPage';
import HomePage from './components/page/HomePage';
import DeptPage from './components/page/DeptPage';
import DeptDetail from './components/dept/DeptDetail';
import RepleBoardPage from './components/page/RepleBoardPage';

function App({imageUploader}) {
  return (
    <>
    <Routes>
    <Route path='/' exact={true} element={<LoginPage />}/>
    <Route path='/home' exact={true} element={<HomePage />}/>
    <Route path='/dept/:gubun' element={<DeptPage imageUploader={imageUploader} />}/>
    <Route path='/repleboard' element={<RepleBoardPage />}/>
    <Route path='/deptdetail/:deptno' element={<DeptDetail imageUploader={imageUploader} />}/>
    <Route path='/auth/kakao/callback' exact={true} element={<KakaoRedirectHandler />}/>
    <Route path='/member' exact={true} element={<MemberPage imageUploader={imageUploader}/>}/>
    <Route path='/profile' exact={true} element={<Profile />}/>
    </Routes>
    </>
  );
}

export default App;
