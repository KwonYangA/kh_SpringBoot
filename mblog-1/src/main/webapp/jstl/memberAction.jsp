<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="java.util.List, java.util.Map"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jstl/core" %>
<%
	// jstl/memberAction.jsp 요청 -> 아래 코드를 만나면
	// MemberController(GetMapping("jsonMemberList")) - MemberLogic
	// -MemberDao -> @Configuration -> Dataconfiguration -> @Bean(글로벌)
	// -> SqlSessionFactory -> SqlSessionTemplate  -> member.xml-> id로 찾음
	//model.addObject("mList", mList);
	//List<Map<String, Object>> mList = (List<Map<String, Object>>)request.getAttribute("mList");
	//response.sendRedirect("/member/jsonMemberList");	
	//localhost:8000/member/memberList
%>
<c:forEach var="map" items="${mList}" varStatuse="x">
	${mList[x.index]}
</c:forEach>