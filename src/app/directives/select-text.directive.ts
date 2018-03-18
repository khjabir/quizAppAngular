import { Directive } from '@angular/core';
import { ElementRef} from '@angular/core';
@Directive({
  selector: '[appSelectText]'
})
export class SelectTextDirective {

  constructor(event: Event) { 
  	console.log(event.target);
  	//code to select text inside the input element
  }

}
