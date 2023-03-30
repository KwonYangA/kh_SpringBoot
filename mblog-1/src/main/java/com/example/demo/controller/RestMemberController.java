package com.example.demo.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.logic.MemberLogic;
import com.google.gson.Gson;

@RestController
@RequestMapping("/member/*")
public class RestMemberController {

	Logger logger = LogManager.getLogger(RestMemberController.class);
	
	@Autowired
	private MemberLogic memberLogic =null;
	
	@PostMapping("memberInsert")
	public String memberInsert(@RequestBody Map<String, Object> pMap) { //리액트에서 body에 {}
		logger.info("memberInsert");
		logger.info(pMap.toString());
		int result = 0;
		result = memberLogic.memberInster(pMap);
		return String.valueOf(result);
	}
	
	@PostMapping("memberUpdate")
	public String memberUpdate(@RequestBody Map<String, Object> pMap) {
		logger.info("memberUpdate");
		logger.info(pMap.toString());
		int result = 0;
		result = memberLogic.memberUpdate(pMap);
		return String.valueOf(result);
	}
	//http://localhost:8000/member/memberList
	//리액트 프로젝트에서 닉네임 중복검사 시 사용하는 메소드 구현이다.
	//리액트에서 넘기는 파라미터는 {MEM_NICKNAME: memInfo[key], type: 'overlap'}
	@GetMapping("memberList")
	public String memberList(@RequestParam Map<String, Object> pMap) {
		logger.info("memberList호출");
		logger.info(pMap);
		String temp = null;
		List<Map<String, Object>> mList = new ArrayList<>();
		mList = memberLogic.memberList(pMap);
		logger.info(mList);
		//파라미터로 넘어온 키위가 회원집합에 존재하면 조회결과 있다. mList.size() ==1 or 0
		//temp에 문자열이 들어있으면 자바스크립트쪽에서 true로 판정된다. - 주의 할 것 - 자바와 다름
		if(mList.size()>0) {
			Gson g = new Gson();
			temp = g.toJson(mList);			
		}
		else {//mem_uid가 없을 때  - 회원가입 유도
			temp = "0";
		}
		return temp;
	}
	
	@GetMapping("memberDelete")
	public String memberDelete(@RequestParam Map<String, Object> pMap) {
		logger.info("memberDelete");
		logger.info(pMap.toString());
		int result = 0;
		result = memberLogic.memberDelete(pMap);
		return String.valueOf(result);
	}
}
