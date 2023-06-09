package com.example.demo.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.vo.MemberVO;

@RestController
@RequestMapping("/restful/*") //upmu[0]
public class RestfulController {
  Logger logger = LoggerFactory.getLogger(RestfulController.class);
  
  //http://localhost:8000/restful/5
  @GetMapping("{id}")
  public String main(@PathVariable int id) {
	  logger.info("해시"+id);
	  return String.valueOf(id);
  }
  
  //http://localhost:8000/restful/get?mem_id=kiwi&mem_pw=123&mem_name=키위
  @GetMapping("get")
  public String getTest(MemberVO mVO) {
	  logger.info(mVO.toString());
	  return "get요청 : "+mVO.getMem_id()+","+mVO.getMem_pw()+","+mVO.getMem_name();
  }
//http://localhost:8000/restful/post
  @PostMapping("post")
  public String postTest(@RequestBody MemberVO mVO) {
	  logger.info(mVO.toString());
	  return "post요청 : "+mVO.getMem_id()+","+mVO.getMem_pw()+","+mVO.getMem_name();
  }
}
