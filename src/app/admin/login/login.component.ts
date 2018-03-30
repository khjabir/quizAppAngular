import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NotifyToastService } from '../../notifications/notify-toast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName = null;
  password = null;
  @Output() loginSuccess: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor(private notifyToastService: NotifyToastService, private router: Router) {

   }

  ngOnInit() {
  }

  onLoginSubmit() {
    if (this.userName === 'jabir' && this.password === 'jabir') {
      this.notifyToastService.showSuccess('Success!!', 'Permission Granted');
      this.loginSuccess.emit(true);
    } else {
      this.notifyToastService.showError('Error!!', 'Unauthorized Access');
    }
  }

  exitFromAdminScreen() {
    this.router.navigate(['/']);
  }

}
