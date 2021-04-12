package com.angular.rest.webservices.restfulwebservices;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class ByCryptEncoderTest {
	
	public static void main(String[] args) {
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		for (int i =1; i<= 10; i++) {
		String encodedString = encoder.encode("password@!23#!");
		System.out.println(encodedString);
		}
	}

}
