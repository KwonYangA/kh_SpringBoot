
import axios from 'axios'
import React, { useEffect } from 'react'
import qs from 'qs'
import { useNavigate } from 'react-router-dom'

const KakaoRedirectHandler = () => {
  //카카오 객체를 global variable에 등록해주는 코드
  //const {Kakao} = window;
  //location.href나 sendRedirect대신 사용
  const navigate = useNavigate()
  //카카오 서버에서 돌려주는 URL뒤에 쿼리스트링 가져오기-mdn searchParams(javaScript-REST API)
  //서블릿-request.getParameter("code"); ==>
  //code=pcILexd-OGDVs_7W3m4mfFpfQGVdB8aRw1tQEmX_sGoz4PXdgEmCLX94ZDKSuqrAdqPRPQoqJREAAAGHAZ_5gQ
  let params = new URL(document.location).searchParams;
  let code = params.get("code");//code=pcILexd-OGDVs_7W3m4mfFpfQGVdB8aRw1tQEmX_sGoz4PXdgEmCLX94ZDKSuqrAdqPRPQoqJREAAAGHAZ_5gQ
  console.log(code)

  const grant_type ="authorization_code"
  const redirect_uri = "http://localhost:3000/auth/kakao/callback"
 
  const getToken = async()=>{
    const payload = qs.stringify({
    grant_type: grant_type,
    client_id: process.env.REACT_APP_KAKAO_API_KEY,
    redirect_uri: redirect_uri,
    code:code
  })

  try {
    const res = await axios.post(
      "https://kauth.kakao.com/oauth/token",
      payload
    )
    window.Kakao.init("bb3e54dd956391506045f66da53a5ff1")
    console.log(res.data.access_token)
    window.Kakao.Auth.setAccessToken(res.data.access_token);
    navigate("/profile")
  } catch (error) {
    console.log(error)
  }
}
useEffect(()=>{
  getToken()
})
  return (
    <div>
      {/* 아무런 의미 없는 화면 - 거쳐서 다른 화면으로 이동하니까- 루트컨텍스트 - 인증이되면 /home으로 가자 */}
      {code}
    </div>
  )
}

export default KakaoRedirectHandler
