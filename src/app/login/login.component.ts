import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { User } from '../model/User';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = new User();
  invalidLogin = false;
  errorMessage:string;
  constructor(private service: ApiService, private route:Router, private loginservice:AuthenticationService) { 
    
  }
  ngOnInit() {
  }

   loginUser(){
    let username='tapan'; 
    let password='password';
    sessionStorage.setItem('user',username);

    this.service.authenticate(username,password).subscribe(
      data=>{
      console.log("Authentication is successful, then we will call the login api with received JWT"+ data);
      let tokenStr = 'Bearer '+data.token;    
      console.log(tokenStr);  
      sessionStorage.setItem('token',tokenStr);
      this.callLoginUsingJWT();
      
      },
      error=>{
        console.log("Error Occoured"+ error);
        this.errorMessage= "Authentication failed with Backend";
      }
    );    
  } 
  callLoginUsingJWT() {
    this.service.loginUser(this.user).subscribe(
      data=>{
      console.log("login Successful"+ data);
      console.log("Redirect to home page");
      sessionStorage.setItem('email',this.user.email);
      sessionStorage.setItem('userrole',data.userrole);
      this.route.navigate(['/home']);
      },
      error=>{
        console.log("Error Occoured"+ error);
        this.errorMessage= "Bad Credential, Please type correct email or password";
      }
    );
    
  } 

  gotoRegistraionPage(){
    this.route.navigate(['/registration']);
  }

}
