package com.example.demo.controller;

import java.util.List;
import java.util.Map;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RepleBoardLogic {
	Logger logger = LogManager.getLogger(RepleBoardLogic.class);
	@Autowired
	private RepleBoardDao repleBoardDao = null;
	
	public List<Map<String, Object>> qnaList (Map<String, Object> pMap){
		logger.info("qnaList호출 성공");
		List<Map<String, Object>> bList = null;
		bList = repleBoardDao.qnaList(pMap);
		return bList;
	}
	public int boardInsert(Map<String, Object> pMap) {
		logger.info("boardInsert 호출");
		int result = 0;
		result = repleBoardDao.boardInsert(pMap);
		return result;
	}
	public int qnaInsert(Map<String, Object> pMap) {
		logger.info("qnaInseter 호출");
		int result = 0;
		logger.info(pMap.toString());
		result = repleBoardDao.qnaInsert(pMap);
		return result;
	}
}

