import { Donation } from './../model/Donation';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.css']
})
export class DonationComponent implements OnInit {
  donations: Donation[];
  errorMessage:String;
  constructor(private apiService : ApiService, private httpClient :HttpClient) { 
   
  }

  
  ngOnInit() {
   this.generateJwt();
  }

  generateJwt(){
    let username='tapan'; 
    let password='password';
    sessionStorage.setItem('user',username);
    this.apiService.authenticate(username,password).subscribe(
      data=>{
      console.log("Authentication is successful, then we will call the registerUserWithJwt api with received JWT"+ data);
      let tokenStr = 'Bearer '+data.token;  
      console.log("tokenStr");   
      console.log(tokenStr);  
      sessionStorage.setItem('token',tokenStr);
      this.getAllDonations();
      
      },
      error=>{
        console.log("Error Occoured"+ error);
        this.errorMessage= "Authentication failed with Backend";
      }
    ); 
  }

  getAllDonations(){
    this.apiService.getAllDonations().subscribe(
      data=>{
        console.log(data);
        this.donations = data;       
      }
    );
  }





}
