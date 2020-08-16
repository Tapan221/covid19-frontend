import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { HttpClient } from '@angular/common/http';
import { Contributer } from '../model/Contributer';

@Component({
  selector: 'app-indivisual-contribution',
  templateUrl: './indivisual-contribution.component.html',
  styleUrls: ['./indivisual-contribution.component.css']
})
export class IndivisualContributionComponent implements OnInit {

  contributers: Contributer[];
  userMail:string;
  constructor(private apiService : ApiService, private httpClient :HttpClient) { 
      
  }

  ngOnInit() {
     this.userMail = sessionStorage.getItem('email');
    this.apiService.getIndivisualContributers(this.userMail).subscribe(
      data=>{
        console.log(data);
        this.contributers = data;
      }
    );
  }

}
