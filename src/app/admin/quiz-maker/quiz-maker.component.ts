import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quiz-maker',
  templateUrl: './quiz-maker.component.html',
  styleUrls: ['./quiz-maker.component.css']
})
export class QuizMakerComponent implements OnInit {

  @Output() logout : EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() { }

  onLogoutClick() {
    this.logout.emit(true);
  }
  ngOnInit() {
  }

}
