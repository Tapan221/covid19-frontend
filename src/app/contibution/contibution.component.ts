import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Contributer } from '../model/Contributer';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contibution',
  templateUrl: './contibution.component.html',
  styleUrls: ['./contibution.component.css']
})
export class ContibutionComponent implements OnInit {

  contributers: Contributer[];

  constructor(private apiService : ApiService, private httpClient :HttpClient) { 
      
  }

  ngOnInit() {
    this.apiService.getAllContributers().subscribe(
      data=>{
        console.log(data);
        this.contributers = data;
      }
    );
  }

  

}
