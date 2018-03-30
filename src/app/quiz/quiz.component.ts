import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quiz } from './quiz.model';
import { QuestionsService } from './questions.service';

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
    constructor(private questionsService: QuestionsService) {
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
            this.currentScore = this.getCurrentScore();
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
        this.questionsService.clearQuestionsFromServer();
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
        this.questionsService.setQuestionsFromServer();
        this.questionsFromServer = this.questionsService.getQuestionsFromServer();
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
            return currentScoreTemp.toFixed(2);
        } else {
            return currentScoreTemp;
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
