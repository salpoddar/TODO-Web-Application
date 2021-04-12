package com.angular.rest.webservices.restfulwebservices.jwt.resource;

import java.io.Serializable;

public class  JwtTokenRequest implements Serializable {
  
  private static final long serialVersionUID = -5616176897013108345L;

  private String username;
    private String password;

//    {
//    	"token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzYWxvbmkiLCJleHAiOjE1OTU3OTM3MzMsImlhdCI6MTU5NTE4ODkzM30.x6GO8GI-mMtx94APXodoBX0MJhAUrsL6ul0kYrlwkSij258s4vit9o_JYnHIsCzJYpBuHrSoknZxsFlupB-Itg"
//    }
    public JwtTokenRequest() {
        super();
    }

    public JwtTokenRequest(String username, String password) {
        this.setUsername(username);
        this.setPassword(password);
    }

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}

