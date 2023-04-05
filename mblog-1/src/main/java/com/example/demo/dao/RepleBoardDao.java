package com.example.demo.dao;

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

	public List<Map<String, Object>> qnaList(Map<String, Object> pMap) {
		logger.info("qnaList 호출");
		List<Map<String, Object>> bList = null;
		bList = sqlSessionTemplate.selectList("qnaList", pMap);
		return bList;
	}

	public int qnaInsert(Map<String, Object> pMap) {
		logger.info(pMap.toString());
		int result = 0;
		int qna_bno = 0;// insert시에 시퀀스로 채번된 속성을 담을 변수 - 여기서는 시퀀스로 채번되는 qna_bno이다.
		result = sqlSessionTemplate.insert("qnaInsert", pMap);
		if (result == 1) {// insert가 되면
			if (pMap.get("qna_bno") != null) {
				qna_bno = Integer.parseInt(pMap.get("qna_bno").toString());
			}
		}
		logger.info("result" + result);
		logger.info("useGeneratedKeys 프러퍼티 속성값 가져오기" + qna_bno);
		return qna_bno;
	}

	public int fileInsert(Map<String, Object> pMap) {
		logger.info("fileInsert 호출");
		int result = 0;
		result = sqlSessionTemplate.insert("fileInsert", pMap);
		return result;
	}

	public void fileUpdate(List<Map<String, Object>> pList) {
		logger.info("fileUpdate 호출");
		logger.info(pList);
		int result = 0;
		result = sqlSessionTemplate.update("fileUpdate", pList);
		logger.info(result);
	}

	public List<Map<String, Object>> fileList(Map<String, Object> pMap) {
		logger.info("fileList 호출");
		List<Map<String, Object>> fList = null;
		fList = sqlSessionTemplate.selectList("fileList", pMap);
		return fList;
	}

	public List<Map<String, Object>> qnaDetail(Map<String, Object> pMap) {
		logger.info("qnaDetail 호출");
		List<Map<String, Object>> qList = null;
		qList = sqlSessionTemplate.selectList("qnaDetail", pMap);
		return qList;
	}

	public void qnaHit(Map<String, Object> pMap) {
		logger.info("fileUpdate 호출");
		logger.info(pMap); // qna_bno가 꼭 들어가있어야한다.
		pMap.put("id", "qna");
		int result = 0;
		result = sqlSessionTemplate.update("qnaHit", pMap);
		logger.info(result);
	}

	public int qnaDelete(Map<String, Object> pMap) {
		logger.info("qnaDelete 호출");
		int result = 0;
		result = sqlSessionTemplate.delete("qnaDelete", pMap);
		return result;
	}

	public int qnaUpdate(Map<String, Object> pMap) {
		logger.info("qnaUpdate 호출");
		int result = 0;
		result = sqlSessionTemplate.update("qnaUpdate", pMap);
		return result;
	}

}