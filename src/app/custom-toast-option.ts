import {ToastOptions} from 'ng2-toastr';

export class CustomToastOption extends ToastOptions {
  animate = 'flyLeft';
  newestOnTop = false;
  toastLife = 3000;
  positionClass = 'toast-top-right';
}
