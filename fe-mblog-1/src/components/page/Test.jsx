import React from 'react'
import { useNavigate } from 'react-router-dom'

const naviate = useNavigate();
const goToMain = () =>{
  naviate("/main");
}

const Test = () => {
  return (
    <div>
      <button className="loginBtn" onClick={goToMain}>로그인</button>
    </div>
  )
}

export default Test
