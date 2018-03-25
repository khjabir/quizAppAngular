import { Directive, HostListener } from '@angular/core';
import { ElementRef} from '@angular/core';
@Directive({
  selector: '[appSelectText]'
})
export class SelectTextDirective {

  constructor(private element: ElementRef) {
  }

  @HostListener('click') onclick() {
    this.element.nativeElement.select();
  }

}
