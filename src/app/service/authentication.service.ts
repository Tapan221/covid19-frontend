import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  isAdminUser(){
    let user = sessionStorage.getItem('userrole')
    console.log("user role = "+user);
    if(user === "true")
    return true;
    else
    return false;
  }
   
  getUserMail() {
    let userMail = sessionStorage.getItem('email')
    return userMail;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('email')
    console.log("is logged in user = ");
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('userrole');
  }
}