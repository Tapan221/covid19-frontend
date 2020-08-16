import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Donation } from '../model/Donation';

@Component({
  selector: 'app-save-donation',
  templateUrl: './save-donation.component.html',
  styleUrls: ['./save-donation.component.css']
})
export class SaveDonationComponent implements OnInit {
  dname:number;
  damount:Number;
  dphone:string;
  dmail:string;
  ddate:any;
  dpaymentUrls:string;
  successMessage:string="";
  errorMessage:string="";
  constructor(private apiService: ApiService) { }

  ngOnInit() {
   
  }

  ngOnChange(){
    this.successMessage="";
    this.errorMessage="";
  }

  onSubmitDonationDetails(donation:Donation){  
    this.apiService.saveDonationDetails(donation).subscribe(
      (data)=>{
      console.log(data);
      this.successMessage="Donation details saved successfully"
      this.errorMessage="";
      },
      (error)=>{
        this.errorMessage="Error in saving the data in DB:";
        this.successMessage="";
      }
    );
   
  }
}
