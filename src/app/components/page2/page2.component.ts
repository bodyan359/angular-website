import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {
  userSurname: any;
  userName: any;
  userAge: any;
  
  constructor() {}
  
  ngOnInit(): void {
    this.userName = history.state.userName;
    this.userSurname = history.state.userSurname;
    this.userAge = history.state.userAge;
  }

}