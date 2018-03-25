import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quiz } from './quiz.model';

@Component({
    selector: 'app-quiz',
    templateUrl: './quiz.component.html',
    styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

    @Output() finishedQuiz: EventEmitter<boolean> = new EventEmitter<boolean>();
    questionsFromServer: Quiz[] = [];
    quizQuestions: Quiz[] = [];
    numberOfQuestions = 0;
    currentQuestionIndex = 0;
    isCorrectAnswer = false;
    constructor() {
    }

    ngOnInit() {
        this.getQuestionsFromServer();
        this.numberOfQuestions = this.questionsFromServer.length;
        this.showFirstQuestion();
    }

    showNextQuestion() {
        if (this.currentQuestionIndex !== this.numberOfQuestions) {
            this.removeCurrentQuestion();
            this.currentQuestionIndex++;
            this.showQuestion();
            this.isCorrectAnswer = false;
        }
    }

    showPrevQuestion() {
        if (this.currentQuestionIndex !== 0) {
            this.removeCurrentQuestion();
            this.currentQuestionIndex--;
            this.showQuestion();
        }
    }

    finishQuiz() {
        this.finishedQuiz.emit(true);
    }

    isFirstQuestion() {
        return (this.currentQuestionIndex === 0);
    }

    isNextButtonDisable() {
        if (this.isLastQuestion() || !this.isCorrectAnswer) {
            return  true;
        }
        return  false;
    }

    isFinishButtonDisable() {
        if (!this.isLastQuestion() || !this.isCorrectAnswer) {
            return  true;
        }
        return false;
    }

    isLastQuestion() {
        return (this.numberOfQuestions === this.currentQuestionIndex + 1);
    }

    setCorrectAnswer() {
        this.isCorrectAnswer = true;
    }

    private getQuestionsFromServer() {
        const question1 = new Quiz('Which is the first letter of english?', 'A', 'B', 'C', 'D', 1);
        const question2 = new Quiz('Which is the last letter of english?', 'W', 'X', 'Y', 'Z', 4);
        const question3 = new Quiz('Which is the second letter of english?', 'C', 'D', 'A', 'B', 4);
        this.questionsFromServer.push(question1);
        this.questionsFromServer.push(question2);
        this.questionsFromServer.push(question3);
    }

    private showFirstQuestion() {
        this.showQuestion();
    }

    private showQuestion() {
        this.quizQuestions.push(this.questionsFromServer[this.currentQuestionIndex]);
    }

    private removeCurrentQuestion() {
        if (this.quizQuestions.length > 0) {
            this.quizQuestions.pop();
        }
    }

}
