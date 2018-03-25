import { Component, OnInit, Input, Output, EventEmitter, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Quiz } from '../quiz.model';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  @Input() question:  Quiz;
  @Input() questionNumber: number;
  @Output() correctAnswerSelected: EventEmitter<void> = new EventEmitter<void>();
  selectedOption = 0;
  defaultToastLife = {toastLife: 2000};

  constructor(public toastr: ToastsManager, vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
   }

  ngOnInit() {
  }

  onOptionSelect(selectedOption: number) {
    if (selectedOption === this.question.answer) {
      this.correctAnswerSelected.emit();
      this.showSuccess('Correct Answer!!');
    } else {
      this.showError('Wrong Answer!!');
    }
  }

  showSuccess(msg: string) {
    this.toastr.success(msg, 'Congratulations!', this.defaultToastLife);
  }

  showError(msg: string) {
    this.toastr.error(msg, 'Oops!', this.defaultToastLife);
  }

  // showWarning() {
  //   this.toastr.warning('You are being warned.', 'Alert!');
  // }

  // showInfo() {
  //   this.toastr.info('Just some information for you.');
  // }

  // showCustom() {
  //   this.toastr.custom('<span style="color: red">Message in red.</span>', null, {enableHTML: true});
  // }

}
