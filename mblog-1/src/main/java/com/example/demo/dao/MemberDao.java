package com.example.demo.dao;

import java.util.List;
import java.util.Map;

import org.mybatis.spring.SqlSessionTemplate;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


//@Repository
@Service
public class MemberDao {
	Logger logger = LoggerFactory.getLogger(MemberDao.class);

	@Autowired
	private SqlSessionTemplate sqlSessionTemplate;
	
	public int memberInsert(Map<String, Object> pMap) {
		logger.info("memberInsert 호출");
		int result = sqlSessionTemplate.update("memberInsert", pMap);
		return result;
	}
	//insert는 object를 반환함

	public List<Map<String, Object>> memberList(Map<String, Object> pMap) {
		logger.info("memberList 호출");
		List<Map<String, Object>> mList = null;		
		mList = sqlSessionTemplate.selectList("memberList",pMap);
		return mList;
	}

	public int memberUpdate(Map<String, Object> pMap) {
		logger.info("memberUpdate 호출");
		int result = sqlSessionTemplate.update("memberUpdate", pMap);
		return result;
	}

	public int memberDelete(Map<String, Object> pMap) {
		logger.info("memberDelete 호출");
		int result = sqlSessionTemplate.delete("memberDelete", pMap);
		return result;
	}

	
}
