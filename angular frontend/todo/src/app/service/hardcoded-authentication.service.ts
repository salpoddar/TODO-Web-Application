import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  loginAuth(username,password) {
    console.log('before ' + this.isUserloggedIn());
    if (username === "saloni" && password === 'dummy'){
      sessionStorage.setItem('authenticaterUser',username);
      console.log('after ' + this.isUserloggedIn());
      return true;
    }
    return false;
  }


  isUserloggedIn(){
    let user = sessionStorage.getItem('authenticaterUser')
    return !(user === null)
  }

  logout (){
    sessionStorage.removeItem('authenticaterUser')
  }
}