import {ToastOptions} from 'ng2-toastr';

export class CustomToastOption extends ToastOptions {
  animate = 'flyRight';
  newestOnTop = false;
  toastLife = 3000;
  positionClass = 'toast-top-left';
}
