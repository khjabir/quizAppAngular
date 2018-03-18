import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { QuizComponent } from './quiz/quiz.component';
import { SelectTextDirective } from './directives/select-text.directive';
import { HomeComponentComponent } from './home-component/home-component.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './admin/login/login.component';
import { QuizMakerComponent } from './admin/quiz-maker/quiz-maker.component';


@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    SelectTextDirective,
    HomeComponentComponent,
    AdminComponent,
    LoginComponent,
    QuizMakerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
