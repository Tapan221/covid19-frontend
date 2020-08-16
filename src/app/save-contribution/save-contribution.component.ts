import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Contributer } from '../model/Contributer';

@Component({
  selector: 'app-save-contribution',
  templateUrl: './save-contribution.component.html',
  styleUrls: ['./save-contribution.component.css']
})
export class SaveContributionComponent implements OnInit {
  errorMessage:string="hide";
  successMessage:string="hide";
  name:number;
  amount:Number;
  phone:string;
  mail:string;
  date:any;
  paymentUrls:string;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  checkSuccessResponse(){
    if(this.successMessage === "hide"){
        return false;
    }
    else{
      return true;
    }
  }

  checkFailureResponse(){
    if(this.errorMessage === "hide"){
        return false;
    }
    else{
      return true;
    }
  }

  onSubmitContributerDetails(contributer:Contributer){ 
    this.apiService.saveContributertDetails(contributer).subscribe(
      
      (data)=>
      {
      console.log(data);
      this.successMessage="Data Saved successfully into DB"
      this.errorMessage="";
      },
      error=>{
        console.log("Error Occoured"+ error);
        this.errorMessage= "User contribution details could not saved to DB";
        this.successMessage="";
      }
    );   
  }


}

