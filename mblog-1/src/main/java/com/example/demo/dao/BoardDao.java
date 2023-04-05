package com.example.demo.dao;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.mybatis.spring.SqlSessionTemplate;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

//@Repository
@Service
public class BoardDao {
	Logger logger = LoggerFactory.getLogger(BoardDao.class);

	@Autowired
	private SqlSessionTemplate sqlSessionTemplate;
	
	public List<Map<String, Object>> boardList(Map<String, Object> pMap) {
		logger.info("boardList");
		List<Map<String, Object>> bList = null;
		if(bList==null) {
			bList = new ArrayList<>();
			Map<String, Object> rMap = new HashMap<>();
			rMap.put("BM_TITLE", "공지사항 1");
			rMap.put("BM_WRITER", "김춘추");
			bList.add(rMap);
			rMap = new HashMap<>();
			rMap.put("BM_TITLE", "공지사항 2");
			rMap.put("BM_WRITER", "이성계");
			bList.add(rMap);
			rMap = new HashMap<>();
			rMap.put("BM_TITLE", "공지사항 3");
			rMap.put("BM_WRITER", "강감찬");
			bList.add(rMap);
		}
		return bList;
	}
	
	public int boardInsert(Map<String, Object> pMap) {
		logger.info("boardInsert호출");
		int result = 0;
		result = sqlSessionTemplate.update("boardInsert", pMap);
		return result;
	}

}
