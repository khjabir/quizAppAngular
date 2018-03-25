import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quiz } from './quiz.model';

@Component({
    selector: 'app-quiz',
    templateUrl: './quiz.component.html',
    styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

    @Output() finishedQuiz: EventEmitter<number> = new EventEmitter<number>();
    questionsFromServer: Quiz[] = [];
    quizQuestions: Quiz[] = [];
    numberOfQuestions = 0;
    currentQuestionIndex = 0;
    isCorrectAnswer = false;
    userOptionSelectCount = 0;
    currentScore = null;
    quizFineshed = false;
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
            this.getCurrentScore();
        }
    }

    showPrevQuestion() {
        if (this.currentQuestionIndex !== 0) {
            this.removeCurrentQuestion();
            this.currentQuestionIndex--;
            this.showQuestion();
        }
    }

    goToResultPage() {
        this.getFinalScore();
        this.quizFineshed = true;
    }

    finishQuiz() {
        console.log(this.currentScore);
        this.finishedQuiz.emit(this.currentScore);
    }

    isFirstQuestion() {
        return (this.currentQuestionIndex === 0);
    }

    isNextButtonDisable() {
        return (this.isLastQuestion() || !this.isCorrectAnswer);
    }

    isFinishButtonDisable() {
        return (!this.isLastQuestion() || !this.isCorrectAnswer);
    }

    isLastQuestion() {
        return (this.numberOfQuestions === this.currentQuestionIndex + 1);
    }

    setOptionResult(isCorrect: boolean) {
        this.isCorrectAnswer = isCorrect;
        this.userOptionSelectCount++;
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

    private getCurrentScore() {
        const currentScoreTemp = (this.currentQuestionIndex / this.userOptionSelectCount) * 5;
        if (currentScoreTemp % 1 !== 0) {
            this.currentScore = currentScoreTemp.toFixed(2);
        } else {
            this.currentScore = currentScoreTemp;
        }
    }

    private getFinalScore() {
        const currentScoreTemp = (this.numberOfQuestions / this.userOptionSelectCount) * 5;
        if (currentScoreTemp % 1 !== 0) {
            this.currentScore = currentScoreTemp.toFixed(2);
        } else {
            this.currentScore = currentScoreTemp;
        }
    }
}
