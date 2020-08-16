import { User } from './../model/User';
import { Donation } from './../model/Donation';
import { Contributer } from './../model/Contributer';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpRequest,HttpHeaders  } from '@angular/common/http';

@Injectable()
export class ApiService {
  //public API = 'http://ec2-52-66-211-86.ap-south-1.compute.amazonaws.com:8080';
  public API='http://localhost:8080';
  public GET_C_API= this.API +'/apis/getAllContributer';
  public SAVE_API_CONTRIBUTION= this.API +'/apis/saveContributer';
  public GET_D_API= this.API +'/apis/getAllDonations';
  public SAVE_API_DONATION= this.API +'/apis/saveDonation';
  public GET_INDIVISUAL_CONTRIBUTION= this.API +'/apis/getIndivisualContribution';
  public LOGIN=this.API+'/api/login';
  public REGISTER=this.API+'/api/registerUser';
  public AUTHENTICATE=this.API+'/authenticate';

  constructor(private httpClient :HttpClient) { 
  }

  getIndivisualContributers(email:string):Observable<any>{     
    return this.httpClient.post(this.GET_INDIVISUAL_CONTRIBUTION,email,{'headers':{ 'content-type': 'application/json'}});   
  }
  
  getAllContributers():Observable<any>{     
    return this.httpClient.get(this.GET_C_API);   
  }

  saveContributertDetails(contributer:Contributer ):Observable<any>{
    return this.httpClient.post(this.SAVE_API_CONTRIBUTION,contributer,{'headers':{ 'content-type': 'application/json'}} );
  }

  getAllDonations():Observable<any>{     
    return this.httpClient.get(this.GET_D_API);   
 }

 saveDonationDetails(donation:Donation ):Observable<any>{
   return this.httpClient.post(this.SAVE_API_DONATION,donation,{'headers':{ 'content-type': 'application/json'}} );
 }

 //First authenticate the backend Application ang get the JWT and store in session storage
authenticate(username:string,password:string):Observable<any>{
  return this.httpClient.post(this.AUTHENTICATE,{username,password} );
}


 loginUser(user:User ):Observable<any>{
   console.log("calling login api");
  return this.httpClient.post(this.LOGIN,user );
}

regiseterUser(user:User ):Observable<any>{
  console.log("calling Register api");
  return this.httpClient.post(this.REGISTER,user,{'headers':{ 'content-type': 'application/json'}} );
}

}

