package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

//컨트롤 계층을 의미하는 어노테이션 추가 -> request와 response 누릴수 있다.
//단순히 bean을 관리받는다 라는 점 외에도 요청객체와 응답객체를 주입 받을 수 있다.
@Controller
//web.xml대신 자바코드에 직접 추가 가능함 - 전체적인 빈목록을 볼 수 없음
@RequestMapping("/home/*") //url-pattern에 등록했던 URL주소 값으로 추가함
public class HomeController {
	//테스트 URL경로 : http://localhost:7000/home/index
 @GetMapping("index") 
 public String home() {
	 return "home/index";
 }
}
