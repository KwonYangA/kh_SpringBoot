package com.example.demo.logic;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.dao.RepleBoardDao;

@Service
public class RepleBoardLogic {
	Logger logger = LogManager.getLogger(RepleBoardLogic.class);
	@Autowired
	private RepleBoardDao repleBoardDao = null;

	public List<Map<String, Object>> qnaList(Map<String, Object> pMap) {
		logger.info("qnaList호출 성공");
		List<Map<String, Object>> bList = null;
		bList = repleBoardDao.qnaList(pMap);
		return bList;
	}

	public int qnaInsert(Map<String, Object> pMap) {
		logger.info(pMap.toString());
		// 여기서 result는 insert 성공유무를 나타내는 숫자가(1: 성공, 0: 실패) 아니라
		// 글등록시에 채번된 시퀀스를 돌려받는 값이여야 한다.(Update를 위해서)
		// qna_bno 값이어야 한다
		int result = 0;
		result = repleBoardDao.qnaInsert(pMap);
		logger.info(pMap.toString());
		// 키값이 소문자이면 #{qna_bno} 이어야 하고, 대문자이면 #{QNA_BNO}이어야 한다.
		// 사용자가 입력한 값의 키값은 모두 소문자로 한다.
		pMap.put("qna_bno", result);
		logger.info(pMap.get("qna_bno"));
		logger.info(pMap.get("fileNames"));
		logger.info(pMap.get("fileNames").toString().length());
		if (pMap.get("fileNames") != null) {
			// 작성자가 선택하는 이미지의 갯수가 다르다.
			// 3개이면 3개를 담아야한다. - 3개에 대한 update가 3번 일어나야한다.
			List<Map<String, Object>> fList = fileNames(pMap);
			logger.info(fList);
			repleBoardDao.fileUpdate(fileNames(pMap));
		}
		// 위에서 돌려받은 시퀀스 갑(qna_bno)를 pMap에 담아줘야한다.
		return result;
	}

	private List<Map<String, Object>> fileNames(Map<String, Object> pMap) {
		List<Map<String, Object>> pList = new ArrayList<>();
		// pMap.get("fileNames")=> ["man1.png", "man2.png", "man3.png"]
		HashMap<String, Object> fMap = null;
		String[] fileNames = pMap.get("fileNames").toString()
				.substring(1, pMap.get("fileNames").toString().length() - 1).split(",");
		for (int i = 0; i < fileNames.length; i++) {
			fMap = new HashMap<String, Object>();
			fMap.put("file_name", fileNames[i]);
			fMap.put("qna_bno", pMap.get("qna_bno"));
			pList.add(fMap);
			logger.info(pList.toString());
		}
		return pList;
	}

	
	// QuillEditor에서 선택한 이미지를 mblog_file테이블에 insert 해보자
	// myBatis에서 insert 태그의 역할 - 채번한 숫자를 캐쉬에 담아준다
	// 그런데 select가 아니라서 resultType 사용할 수 없다 - 프로시저 사용-
	// 그러므로 parameterType뿐이다. - 매개변수에 값을 담아준다
	// TestParam.java -> HashMapBinder설계 파라미터에 값을 담아준다
	public String imageUpload(MultipartFile image) {
		logger.info("imageUpload 호출 성공");
		// 이미지 업로드가 된 파일에 대한 file_name, file_size, file_path등을 결정해줌 - 서비스 계층이다.
		Map<String, Object> pMap = new HashMap<>();
		String filename = null;
		String fullPath = null;
		double d_size = 0.0;
		if (!image.isEmpty()) {
			// filename = image.getOriginalFilename();
			// 같은 파일명으로 업로드 되는 경우 덮어쓰기 되는 것을 방지 하고자 오리지널 파일명 앞에 날짜와 시간정보를 활용하여
			// 절대 같은 이름이 발생하지 않도록 처리해 본다
			SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMddHHmmss");
			Calendar time = Calendar.getInstance();
			filename = sdf.format(time.getTime()) + "-" + image.getOriginalFilename().replaceAll(" ", "-");
			String saveFolder = "D:\\workspace_sts\\mblog-1\\src\\main\\webapp\\pds";
			fullPath = saveFolder + "\\" + filename;
			try {
				File file = new File(fullPath);
				byte[] bytes = image.getBytes();
				// outstream 반드시 생성해서 파일정보를 읽어서 쓰기를 처리해줌
				// BufferedOutputStream은 필터 클래스이지 실제 파일 쓸 수 없는 객체
				// 실제 파일 쓰기가 가능한 클래스가 FileOutputStream 임 - 생성자 파라미터에 파일 정보 담기
				BufferedOutputStream bos = new BufferedOutputStream(new FileOutputStream(file));
				bos.write(bytes);
				// 파일쓰기와 관련 위변조 방지 위해 사용후 반드시 닫을 것
				bos.close();
				// 여기 까지는 이미지 파일 쓰기 처리, 이 다음에는 mblog_file테이블에 insert될 정보를 초기화 해줌
				d_size = Math.floor(file.length() / (1024.0 * 1024.0) * 10) / 10.0;
				pMap.put("file_name", filename);
				pMap.put("file_size", d_size);
				pMap.put("file_path", fullPath);
				logger.info(d_size);
				logger.info(filename);
				logger.info(fullPath);
				int result = repleBoardDao.fileInsert(pMap);
				logger.info(result);
			} catch (Exception e) {
				e.printStackTrace();
				logger.info(e.toString());
			}
		}
		// 리턴 값으로 선택한 이미지 파일명을 넘겨서 사용자 화면에 첨부된 파일명을 열거해 주는데 사용할 것임
		String temp = filename;
		return temp;
	}

	// 한 건만 가져오는데 왜 List<Map>인가? - Map으로도 가능하지 않을까?
	// DataSet 변화 ->리액트->[{qna}, {fileList}, {commentList}] 배열객체
	public List<Map<String, Object>> qnaDetail(Map<String, Object> pMap) {
		logger.info("qnaDetail호출 성공");
		int qna_bno = 0;
		if (pMap.get("QNA_BNO") != null) {
			qna_bno = Integer.parseInt(pMap.get("QNA_BNO").toString());
			pMap.put("qna_bno", qna_bno);
		}
		List<Map<String, Object>> bList = null;
		bList = repleBoardDao.qnaDetail(pMap);
		if (bList.size() > 0) {// 조회결과가 있다
			repleBoardDao.qnaHit(pMap);
		}
		logger.info(bList);
		// 댓글 처리 추가

		// 이미지파일 있어?
		if (bList != null && bList.size() == 1) {
			List<Map<String, Object>> fileList = repleBoardDao.fileList(pMap);
			if (fileList != null && fileList.size() > 0) {
				bList.addAll(fileList);
			}
		}
		return bList;
	}

	// 여기서는 qna테이블 레코드만 삭제
	public int qnaDelete(Map<String, Object> pMap) {
		int result = 0;
		result = repleBoardDao.qnaDelete(pMap);
		return 0;
	}

	public int qnaUpdate(Map<String, Object> pMap) {
		int result = 0;
		result = repleBoardDao.qnaUpdate(pMap);
		return 0;
	}
}
