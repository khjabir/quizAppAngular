import { Component, OnInit, Input, Output, EventEmitter, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Quiz } from '../quiz.model';
import { NotifyToastService } from '../../notifications/notify-toast.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
})
export class QuestionComponent implements OnInit {

  @Input() question:  Quiz;
  @Input() questionNumber: number;
  @Output() optionSelected: EventEmitter<boolean> = new EventEmitter<boolean>();
  selectedOption = 0;
  successTitle = 'Congrats!';
  successMsg = 'Correct Answer!!';
  WrongTitle = 'Oops!';
  WrongMsg = 'Wrong Answer!!';

  constructor(private notifyToastService: NotifyToastService) {
  }

  ngOnInit() {
  }

  onOptionSelect(selectedOption: number) {
    if (selectedOption === this.question.answer) {
      this.optionSelected.emit(true);
      this.notifyToastService.showSuccess(this.successTitle, this.successMsg);
    } else {
      this.optionSelected.emit(false);
      this.notifyToastService.showError(this.WrongTitle, this.WrongMsg);
    }
  }

  // showSuccess(msg: string) {
  //   this.toastr.success(msg, 'Congrats!');
  // }

  // showError(msg: string) {
  //   this.toastr.error(msg, 'Oops!');
  // }

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
