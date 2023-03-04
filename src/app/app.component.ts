/*********************************************************************************
* WEB422 – Assignment 06
* I declare that this assignment is my own work in accordance with Seneca Academic Policy. No part of this
* assignment has been copied manually or electronically from any other source (including web sites) or
* distributed to other students.
*
* Name: _______Marmik Bhatt_______________ Student ID: _____038536157_________ Date: _____April 11 2021____
*
* Online Link: https://distracted-noyce-11eba9.netlify.app
*
********************************************************************************/ 
import { Component,OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { AuthService } from './auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'web422-a6';
  searchString: String;
  token;

  constructor (private router: Router, private authService: AuthService) {}

  handleSearch() {

    this.router.navigate(['/search'], {
      queryParams: { q: this.searchString },
    });
    this.searchString = '';
  }

  ngOnInit(){
    this.router.events.subscribe(
      (event)=>{
        if(event instanceof NavigationStart){
          this.token = this.authService.readToken();

        }
      }
    )
  }
  logout(){
    localStorage.clear();
    this.router.navigate(['./login']);
  }
}
