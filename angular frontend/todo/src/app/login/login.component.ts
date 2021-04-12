import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  username = 'saloni'
  password = ''
  errorMsg  = 'Invalid Credentials'
  invalidLogin = false

  //Router

  constructor(private router : Router,
     private hardcodedAuthenticationServce : HardcodedAuthenticationService,
    private basicauthenticationservice : BasicAuthenticationService) { }

  ngOnInit(): void {
  }
  HandleLogin(){
    if (this.hardcodedAuthenticationServce.loginAuth(this.username,this.password)){
      //Redirect to welcome Page
      this.router.navigate(['welcome', this.username])
      this.invalidLogin = false
    } else {
      this.invalidLogin = true
    }
    
  }

  handleBasicAuthLogin(){
    this.basicauthenticationservice.executeAuthenticationService(this.username,this.password)
      .subscribe(
        data => {
          console.log(data)
          this.router.navigate(['welcome', this.username])
          this.invalidLogin = false
        },
        error => {
          console.log(error)
          this.invalidLogin = true
        }
      )    
  }

  handleJWTAuthLogin(){
    this.basicauthenticationservice.executeJWTAuthenticationService(this.username,this.password)
      .subscribe(
        data => {
          console.log(data)
          this.router.navigate(['welcome', this.username])
          this.invalidLogin = false
        },
        error => {
          console.log(error)
          this.invalidLogin = true
        }
      )    
  }
}
