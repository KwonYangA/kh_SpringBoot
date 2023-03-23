package com.example.demo.vo;

import lombok.Builder;
import lombok.Data;

@Data
@Builder // 생성자 역할 어노테이션
public class DeptVO {
 private int deptno;
 private String dname;
 private String loc;
 private String file_name;
 private String file_url;
}