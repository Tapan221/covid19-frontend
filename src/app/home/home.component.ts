
import { Donation } from './../model/Donation';
import { Contributer } from '../model/Contributer';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { HttpClient } from '@angular/common/http';
import { MessageService } from '../service/message-service.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { AuthenticationService } from '../service/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})
export class HomeComponent implements OnInit {
  
  constructor(private authService : AuthenticationService, private router: Router) { 
    
  }

  ngOnInit() {
   /*  this.bnIdle.startWatching(600).subscribe((isTimedOut: boolean) => {
      if (isTimedOut && this.authService.isUserLoggedIn()) {
        alert('session expired');
        this.authService.logOut();
        this.router.navigate(['login']);      
      }
    }); */
  }

  



}
