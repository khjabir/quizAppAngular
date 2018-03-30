import { Injectable, OnInit } from '@angular/core';
import { Quiz } from './quiz.model';


@Injectable()
export class QuestionsService implements OnInit {

  questionsFromServer: Quiz[] = [];

  constructor() {
    this.ngOnInit();
  }

  ngOnInit() {
    const question1 = new Quiz('Which is the first letter of english?', 'A', 'B', 'C', 'D', 1);
    const question2 = new Quiz('Which is the last letter of english?', 'W', 'X', 'Y', 'Z', 4);
    const question3 = new Quiz('Which is the second letter of english?', 'C', 'D', 'A', 'B', 4);
    this.questionsFromServer.push(question1);
    this.questionsFromServer.push(question2);
    this.questionsFromServer.push(question3);
  }

}
