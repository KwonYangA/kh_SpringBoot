package com.example.demo.logic;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dao.MemberDao;

/**
 * 모델계층 (MemberLogic(직접 오라클과 연통하지 X) 
 * 	+ MemberDao[데이터셋])
 * 공통된 관심사 분리(AspectJ 프레임워크 - 오픈소스 참고)
 * 트랜잭션 처리 지원 받음
 * 
 *
 */
@Service
public class MemberLogic {
	Logger logger = LoggerFactory.getLogger(MemberLogic.class);
	
	@Autowired
	private MemberDao memberDao = null;
	
	public int memberInster(Map<String, Object> pMap) {
		logger.info("memberInsert 호출");
		int result = 0;
		logger.info(pMap.toString());
		result = memberDao.memberInsert(pMap);
		return result;
	}

	public List<Map<String, Object>> memberList(Map<String, Object> pMap) {
		logger.info("memberlist 호출");
		List<Map<String, Object>> mList = new ArrayList<>();
		mList = memberDao.memberList(pMap);
		return mList;
	}

	public int memberUpdate(Map<String, Object> pMap) {
		logger.info("memberUpdate 호출");
		int result = 0;
		logger.info(pMap.toString());
		result = memberDao.memberUpdate(pMap);
		return result;
	}
	
	public int memberDelete(Map<String, Object> pMap) {
		logger.info("memberDelete 호출");
		int result = 0;
		logger.info(pMap.toString());
		result = memberDao.memberDelete(pMap);
		return result;
	}
}
