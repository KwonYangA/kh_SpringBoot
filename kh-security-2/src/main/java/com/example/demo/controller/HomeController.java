package com.example.demo.controller;

import javax.servlet.http.HttpServletRequest;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;

@Controller
public class HomeController {
	Logger logger = LogManager.getLogger(HomeController.class);
	
	@Autowired
	private UserRepository userRepository;
	
	@GetMapping("/")
	public String index(HttpServletRequest req){
		logger.info("index");
		logger.info("admin호출 :" + req.isUserInRole("ROLE_ADMIN"));
		logger.info("user호출 :" + req.isUserInRole("ROLE_USER"));
		logger.info("manager호출 :" + req.isUserInRole("ROLE_MANAGER"));
		if(req.isUserInRole("ROLE_ADMIN")) {
			return "forward:admin-index.jsp";
		}
		else if(req.isUserInRole("ROLE_USER")) {
			return "forward:user-index.jsp";
		}
		else {
			return "forward:index.jsp";
		}
	}
	@GetMapping("/loginForm")
	public String loginForm(){
		return "redirect:/loginForm.jsp";
	}
	//회원가입 화면 
	@GetMapping( "/joinForm" )
	 public String joinForm() {
	 return "redirect:/joinForm.jsp";
	 }
	@PostMapping("/join")
	public String join(User user){
		
		user.setRole("ROLE_USER");
		userRepository.save(user);
		return "redirect:/loginForm.jsp";
	}
	/*/login이 요청되면 스프링 시큐리티
	 * @GetMapping("/login") public @ResponseBody String login(){ return
	 * "로그인 한 후 페이지"; }
	 */
	@GetMapping("/user")
	public @ResponseBody String user(){
		logger.info("user");
		return "user";
	}
	@GetMapping("/manager")
	public @ResponseBody String manager(){
		logger.info("manager");
		return "manager";
	}
	@GetMapping("/admin")
	public @ResponseBody String admin(){
		logger.info("admin");
		return "admin";
	}
	
	 @GetMapping("/auth")
	 public @ResponseBody Authentication auth() {
		 return SecurityContextHolder.getContext().getAuthentication();
	 }
}
