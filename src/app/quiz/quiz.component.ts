import { Component, OnInit } from '@angular/core';
import { Quiz } from './quiz.model';

@Component({
    selector: 'app-quiz',
    templateUrl: './quiz.component.html',
    styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

    quizQuestions : Quiz[] = [];
    question1 = new Quiz("Which is the first letter of english?", "A", "B", "C", "D", 1);
    question2 = new Quiz("Which is the last letter of english?", "W", "X", "Y", "Z", 4);
    constructor() { 
        this.quizQuestions.push(this.question1);
        this.quizQuestions.push(this.question2);
    }

    ngOnInit() {
    }

}
