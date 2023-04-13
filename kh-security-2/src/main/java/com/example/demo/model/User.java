package com.example.demo.model;

import java.sql.Timestamp;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.hibernate.annotations.CreationTimestamp;

import lombok.Builder;
import lombok.Data;

@Entity // JPA 사용시 테이블 생성 - application.yml에서 create모드인지 체크
@Data
public class User {
 @Id // PK
 @GeneratedValue( strategy = GenerationType.IDENTITY )
 private int id;
 private String username;
 private String password;
 private String email;
 private String role; // ROLE_USER, ROLE_MANAGER, ROLE_ADMIN
 @CreationTimestamp
 private Timestamp createDate;
 /**
 * 회원가입에 사용할 생성자 추가
 */
 @Builder
 public User( String username, String password, String email, String role, Timestamp createDate ) {
 this.username = username;
 this.password = password;
 this.email = email;
 this.role = role;
 this.createDate = createDate;
 }
	
}
