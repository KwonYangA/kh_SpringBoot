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
	
	@GetMapping("memberList")
	public String memberList(@RequestParam Map<String, Object> pMap) {
		logger.info("memberList호출");
		String temp = null;
		List<Map<String, Object>> mList = new ArrayList<>();
		mList = memberLogic.memberList(pMap);
		Gson g = new Gson();
		temp = g.toJson(mList);
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
