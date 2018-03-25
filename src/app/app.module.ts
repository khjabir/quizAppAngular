import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastModule } from 'ng2-toastr/ng2-toastr';

import { AppComponent } from './app.component';
import { QuizComponent } from './quiz/quiz.component';
import { SelectTextDirective } from './directives/select-text.directive';
import { HomeComponentComponent } from './home-component/home-component.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './admin/login/login.component';
import { QuizMakerComponent } from './admin/quiz-maker/quiz-maker.component';
import { QuestionComponent } from './quiz/question/question.component';


@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    SelectTextDirective,
    HomeComponentComponent,
    AdminComponent,
    LoginComponent,
    QuizMakerComponent,
    QuestionComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    NgbModule.forRoot(),
    ToastModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
