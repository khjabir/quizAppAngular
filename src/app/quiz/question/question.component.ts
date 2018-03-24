import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quiz } from '../quiz.model';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  @Input() question:  Quiz;
  @Input() questionNumber: number;
  selectedOption = 0;
  constructor() { }

  ngOnInit() {
  }

  onOptionSelect(selectedOption: number) {
    if (selectedOption === this.question.answer) {
      console.log('Correct Answer!!!!!!!');
    } else {
      console.log('Wrong Answer!!!');
    }
  }

}
