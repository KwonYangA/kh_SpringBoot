import React from 'react'
import KhSignup from './KhSignup';
import Signuptype from './Signuptype';

const SignupPage = ({authLogic}) => {
  //window.location.search쿼리스트링 가져오기 searchParam
  const type = window.location.search.split('=')[1]
  const type2 = window.location.search.split('&')[0].split('=')[1]
  console.log(type2)
  console.log(type);
  const signupage = () => {
    if(type){
      return <KhSignup authLogic={authLogic} />
    } else {
      return <Signuptype/>
    }
  } 

  return (
    signupage()
  );
};

export default SignupPage