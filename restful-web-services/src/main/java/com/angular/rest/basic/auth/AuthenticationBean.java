package com.angular.rest.basic.auth;

public class AuthenticationBean {
	private String msg;
	
	public AuthenticationBean(String msg) {
		this.msg = msg;
	}

	public String getMsg() {
		return msg;
	}

	public void setMsg(String msg) {
		this.msg = msg;
	}

	@Override
	public String toString() {
		return "AuthenticationdBean [msg=" + msg + "]";
	}
	
}
