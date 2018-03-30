import { Injectable } from '@angular/core';
import { ToastsManager } from 'ng2-toastr';

@Injectable()
export class NotifyToastService {

  constructor(public toastr: ToastsManager) {
  }

   showSuccess(title: string, msg: string) {
    this.toastr.success(msg, title);
  }

  showError(msg: string, title: string) {
    this.toastr.error(msg, title);
  }

  showWarning() {
    this.toastr.warning('You are being warned.', 'Alert!');
  }

  showInfo() {
    this.toastr.info('Just some information for you.');
  }

  showCustom() {
    this.toastr.custom('<span style="color: red">Message in red.</span>', null, {enableHTML: true});
  }
}
