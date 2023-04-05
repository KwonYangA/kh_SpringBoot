package com.example.demo.logic;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.dao.BoardDao;

import lombok.extern.slf4j.Slf4j;

@Service
public class BoardLogic {
	Logger logger = LoggerFactory.getLogger(BoardLogic.class);
	@Autowired
	private BoardDao boardDao = null;
	
	public List<Map<String, Object>> boardList(Map<String, Object> pMap) {
		logger.info("boardList");
		List<Map<String, Object>> bList = new ArrayList<>();
		bList = boardDao.boardList(pMap);
		return bList;
	}
	
	public int boardInsert(Map<String, Object> pMap) {
		logger.info("boardInsert 호출");
		int result = 0;
		result = boardDao.boardInsert(pMap);
		return result;
	}
}
