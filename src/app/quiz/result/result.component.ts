import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  scoreInHundred = 0;
  @Input() score: number;
  @Output() goHome: EventEmitter<void> = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
    this.scoreInHundred = this.score * 20;
  }

  goToQuizHome() {
    this.goHome.emit();
  }

}
