import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName = null;
  password = null;
  @Output() loginSuccess: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() {

   }

  ngOnInit() {
  }

  onLoginSubmit() {
    if(this.userName === 'jabir' && this.password === 'jabir') {
      console.log('Login Success!!!!!!');
      this.loginSuccess.emit(true);
    } else {
      console.log('Invalid Login!!!!!!!!');
    }
  }

}
