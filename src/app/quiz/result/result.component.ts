import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  scoreInHundred = 0;
  message = null;
  @Input() score: number;
  @Output() goHome: EventEmitter<void> = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
    this.scoreInHundred = this.score * 20;
    this.message = this.getMessageText();
  }

  goToQuizHome() {
    this.goHome.emit();
  }

  private getMessageText() {
    if (this.score <= 2) {
      return 'Good!!';
    } else if (this.score <= 4) {
      return  'Very Good!!';
    } else {
      return 'Excellent!!';
    }
  }

}
