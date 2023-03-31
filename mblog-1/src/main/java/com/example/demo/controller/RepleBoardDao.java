package com.example.demo.controller;

import java.util.List;
import java.util.Map;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class RepleBoardDao {
	@Autowired
	private SqlSessionTemplate sqlSessionTemplate = null;
	
	Logger logger = LogManager.getLogger(RepleBoardDao.class);
	
	public List<Map<String, Object>> qnaList (Map<String, Object> pMap){
		logger.info("qnaList 호출");
		List<Map<String, Object>>bList = null;
		bList = sqlSessionTemplate.selectList("qnaList", pMap);
		return bList;
	}
	public int boardInsert(Map<String, Object> pMap) {
		logger.info("boardInsert호출");
		int result = 0;
		result = sqlSessionTemplate.update("boardInsert", pMap);
		return result;
	}
	public int qnaInsert(Map<String, Object> pMap) {
		logger.info("qnaInsert 호출");
		int result = 0;
		result = sqlSessionTemplate.insert("qnaInsert", pMap);
		return result;
	}

}