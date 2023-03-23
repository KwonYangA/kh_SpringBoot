package com.example.demo.vo;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class MemberVO {
	private String mem_id = null;
	private String mem_pw = null;
	private String mem_name = null;
	
	public String getMem_id() {
		// TODO Auto-generated method stub
		return mem_id;
	}

	public String getMem_pw() {
		// TODO Auto-generated method stub
		return mem_pw;
	}

	public String getMem_name() {
		// TODO Auto-generated method stub
		return mem_pw;
	}
}
