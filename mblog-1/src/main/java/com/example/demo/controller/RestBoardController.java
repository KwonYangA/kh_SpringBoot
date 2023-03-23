package com.example.demo.controller;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.logic.BoardLogic;
import com.google.gson.Gson;

@RestController
@RequestMapping("/board/*")
public class RestBoardController {
	Logger logger = LoggerFactory.getLogger(RestBoardController.class);
	@Autowired
	private BoardLogic boardLogic = null;
	@GetMapping("jsonboardList")
	public String jsonBoardList(Model model, @RequestParam Map<String, Object> pMap) {
		System.out.println("boardList호출");
		logger.info("jsonBoardList호출");
		logger.info(pMap.toString());
		List<Map<String, Object>> bList = null;
		bList = boardLogic.boardList(pMap);
		model.addAttribute("bList", bList);
		//return "forward:boardList.jsp";
		Gson g = new Gson();
		String temp = g.toJson(bList);
		return temp;
	}
	@GetMapping("getTest")
	public String getTest() {
		
		return "테스트";
	}
}
