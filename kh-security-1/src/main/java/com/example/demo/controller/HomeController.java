package com.example.demo.controller;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.SecurityMessage;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;

//스프링시큐리티에서는 별도의 세션scope 관리함
//Authentication
//@AuthenticationPrincipal
@RestController
public class HomeController {
	 Logger logger = LogManager.getLogger(HomeController.class);
	 @GetMapping("/")
	 public String index() {
		 logger.info("index");
		 return "홈페이지";
	 }
	 @GetMapping("/auth")
	 public Authentication auth() {
		 return SecurityContextHolder.getContext().getAuthentication();
	 }
	 @PreAuthorize("hasAnyAuthority('ROLE_USER')")
	 @GetMapping("/user")
	 public SecurityMessage user() {
		 return SecurityMessage.builder().auth(SecurityContextHolder.getContext()
				 .getAuthentication()).message("User정보").build();
	 }
	 @PreAuthorize("hasAnyAuthority('ROLE_ADMIN')")
	 @GetMapping("/admin")
	 public SecurityMessage admin() {
		 return SecurityMessage.builder().auth(SecurityContextHolder.getContext()
				 .getAuthentication()).message("Admin정보").build();
	 }

}
