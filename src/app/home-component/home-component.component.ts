import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css', '../app.component.css']
})
export class HomeComponentComponent implements OnInit {

  employeeId = null;
  employeeIdAccepted = false;
  constructor() {
  }

  ngOnInit() {
  }

  employeeIdEntered() {
    if (this.employeeId == null || this.employeeId === '') {
      return false;
    }
    return true;
  }

  onEmployeeIdSubmit() {
    console.log('employee id is : ' + this.employeeId);
    this.employeeIdAccepted = true;
    this.employeeId = null;
  }

  quizFinished() {
    this.employeeIdAccepted = false;
  }

}
