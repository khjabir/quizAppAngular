import { Injectable } from '@angular/core';
import { ToastsManager } from 'ng2-toastr';

@Injectable()
export class NotifyToastService {

  constructor(public toastr: ToastsManager) {
  }

   showSuccess(title: string, msg: string) {
    this.toastr.success(title, msg);
  }

  showError(title: string, msg: string) {
    this.toastr.error(title, msg);
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
