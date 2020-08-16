import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';
import { User } from '../model/User';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user = new User();
  message:string;
  errorMessage:string;
  constructor(private service: ApiService, private route:Router) { 
    
  }

  

  ngOnInit() {
  }

  registerUser(){
    let username='tapan'; 
    let password='password';
    sessionStorage.setItem('user',username);
    this.service.authenticate(username,password).subscribe(
      data=>{
      console.log("Authentication is successful, then we will call the registerUserWithJwt api with received JWT"+ data);
      let tokenStr = 'Bearer '+data.token;  
      console.log("tokenStr");   
      console.log(tokenStr);  
      sessionStorage.setItem('token',tokenStr);
      this.registerUserWithJwt();
      
      },
      error=>{
        console.log("Error Occoured"+ error);
        this.errorMessage= "Authentication failed with Backend";
      }
    ); 
  }

  registerUserWithJwt(){
    //By defaault user role would be normal user
    this.user.userrole=false;
    this.service.regiseterUser(this.user).subscribe(
      data=>{
        console.log("Registration Successful"+ data);
        this.message="Registration Successful";
        this.errorMessage="";
      //this.route.navigate(['/login']);
      },
      error=>{
        console.log("Error Occoured"+ error);
        this.errorMessage= this.user.email + " already exist in DB, Please try to login";
        this.message="";
      }
    );
  }



}
