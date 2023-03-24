import React, { useCallback, useState } from 'react'
import { useNavigate } from 'react-router'
import { memberInsertDB } from '../../service/dbLogic'
import { BButton, ContainerDiv, FormDiv, HeaderDiv } from '../../styles/FormStyle'

//회원가입페이지
const Signup = () => {
  const navigate = useNavigate()
  const [mem_uid, setMemuid] = useState('')
  const [mem_pw, setMempw] = useState('')
  const [mem_name, setMemname] = useState('')
  const [mem_nickname, setMemnickname] = useState('')
  const [mem_email, setMememail] = useState('')
  const [mem_tel, setMemtel] = useState('')
  const [mem_gender, setMemgender] = useState('')
  const [mem_birthday, setMembirthday] = useState('')
  //Post, @RequestBody, {} -> Map or VO -> 비동기처리 -> Promise(resolve, reject)
  //async - await
  const memberInsert = async ()=>{
    const member ={
      mem_uid, //mem_uid:mem_uid 같을 때는 생략가능함
      mem_pw,
      mem_name,
      mem_nickname,
      mem_email,
      mem_tel,
      mem_gender,
      mem_birthday
    }
    const res = await memberInsertDB(member);
      console.log(res+","+res.data)
      if (!res.data) {
        console.log("회원가입에 실패하였습니다");
      } else {
        console.log("회원가입에 성공하였습니다.");
        navigate("/home");
      }
  }

  const handleID = useCallback((e)=>{
    setMemuid(e)
  }, [])
  const handlePW = useCallback((e)=>{
    setMempw(e)
  }, [])
  const handleName = useCallback((e)=>{
    setMemname(e)
  }, [])
  const handleNickName = useCallback((e)=>{
    setMemnickname(e)
  }, [])
  const handleEmail = useCallback((e)=>{
    setMememail(e)
  }, [])
  const handleTel = useCallback((e)=>{
    setMemtel(e)
  }, [])
  const handleGender = useCallback((e)=>{
    setMemgender(e)
  }, [])
  const handleBithday = useCallback((e)=>{
    setMembirthday(e)
  }, [])

  return (
    <>
      <ContainerDiv>
        <HeaderDiv>
          <h3 style={{marginLeft:"10px"}}>회원가입</h3>
        </HeaderDiv>
        <FormDiv>
          <div style={{width:"100%", maxWidth:"2000px"}}>
            <div style={{display: 'flex', justifyContent: 'space-between', marginBottom:'5px'}}>
              <h4>ID</h4> 
            </div>
            <input id="mem_uid" type="text" maxLength="50" placeholder="ID를 입력하세요."
              style={{width:"200px",height:'40px' , border:'1px solid lightGray', marginBottom:'5px'}} onChange={(e)=>{handleID(e.target.value)}} />

            <div style={{display: 'flex', justifyContent: 'space-between', marginBottom:'5px'}}>
              <h4>PW</h4> 
            </div>
            <input id="mem_pw" type="text" maxLength="50" placeholder="password을 입력하세요."
              style={{width:"200px",height:'40px' , border:'1px solid lightGray', marginBottom:'5px'}} onChange={(e)=>{handlePW(e.target.value)}} />
            
            <div style={{display: 'flex', justifyContent: 'space-between', marginBottom:'5px'}}>
              <h4>PW CHECK</h4> 
            </div>
            <input id="mem_pw2" type="text" maxLength="50" placeholder="password을 입력하세요."
              style={{width:"200px",height:'40px' , border:'1px solid lightGray', marginBottom:'5px'}}  />

            <div style={{display: 'flex', justifyContent: 'space-between', marginBottom:'5px'}}>
              <h4>Name</h4> 
            </div>              
            <input id="mem_name" type="text" maxLength="50" placeholder="이름을 입력하세요."
              style={{width:"200px",height:'40px' , border:'1px solid lightGray', marginBottom:'5px'}} onChange={(e)=>{handleName(e.target.value)}} />
           
            <div style={{display: 'flex', justifyContent: 'space-between', marginBottom:'5px'}}>
              <h4>Nickname</h4> 
            </div>              
            <input id="mem_nickname" type="text" maxLength="50" placeholder="nickname을 입력하세요."
              style={{width:"200px",height:'40px' , border:'1px solid lightGray', marginBottom:'5px'}} onChange={(e)=>{handleNickName(e.target.value)}} />
           
            <div style={{display: 'flex', justifyContent: 'space-between', marginBottom:'5px'}}>
              <h4>E-mail</h4> 
            </div>              
            <input id="mem_emial" type="text" maxLength="50" placeholder="email를 입력하세요."
              style={{width:"200px",height:'40px' , border:'1px solid lightGray', marginBottom:'5px'}} onChange={(e)=>{handleEmail(e.target.value)}}/>
            
            <div style={{display: 'flex', justifyContent: 'space-between', marginBottom:'5px'}}>
              <h4>Tel</h4> 
            </div>              
            <input id="mem_tel" type="text" maxLength="50" placeholder="전화번호를 입력하세요."
              style={{width:"200px",height:'40px' , border:'1px solid lightGray', marginBottom:'5px'}} onChange={(e)=>{handleTel(e.target.value)}} />
            
            <div style={{display: 'flex', justifyContent: 'space-between', marginBottom:'5px'}}>
              <h4>Gender</h4> 
            </div>              
            <input id="mem_gender" type="text" maxLength="50" placeholder="성별을 입력하세요."
              style={{width:"200px",height:'40px' , border:'1px solid lightGray', marginBottom:'5px'}} onChange={(e)=>{handleGender(e.target.value)}} />
            
            <div style={{display: 'flex', justifyContent: 'space-between', marginBottom:'5px'}}>
              <h4>Brithday</h4> 
            </div>              
            <input id="mem_birthday" type="text" maxLength="50" placeholder="생일을 입력하세요."
              style={{width:"200px",height:'40px' , border:'1px solid lightGray', marginBottom:'5px'}} onChange={(e)=>{handleBithday(e.target.value)}} />

            <div style={{display: 'flex', justifyContent: 'space-between', marginBottom:'5px'}}>
            <BButton onClick={()=>{memberInsert()}}>회원가입</BButton>
            <hr style={{margin:'10px 0px 10px 0px'}}/> 
            </div>
            {/* <BoardFileInsert files={files}/> */}
            </div>
        </FormDiv>
      </ContainerDiv>
    </>
  )
}

export default Signup
