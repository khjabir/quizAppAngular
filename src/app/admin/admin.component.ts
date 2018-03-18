import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  isAuthenticated = false;
  constructor() { }

  ngOnInit() {
  }

  authenticated() {
    return this.isAuthenticated;
  }

  onSuccessfulLogin() {
    this.isAuthenticated = true;
  } 

  onLogout() {
    this.isAuthenticated = false;
  }
}
