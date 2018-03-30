import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { ToastOptions } from 'ng2-toastr';
import { BarRatingModule } from 'ngx-bar-rating';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { QuizComponent } from './quiz/quiz.component';
import { SelectTextDirective } from './directives/select-text.directive';
import { CustomToastOption } from './notifications/custom-toast-option';
import { HomeComponentComponent } from './home-component/home-component.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './admin/login/login.component';
import { QuizMakerComponent } from './admin/quiz-maker/quiz-maker.component';
import { QuestionComponent } from './quiz/question/question.component';
import { ResultComponent } from './quiz/result/result.component';

const appRoutes: Routes = [
  { path: 'admin', component: AdminComponent},
  { path: '', component: HomeComponentComponent}
];

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
    ResultComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    NgbModule.forRoot(),
    ToastModule.forRoot(),
    BarRatingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [{provide: ToastOptions, useClass: CustomToastOption}],
  bootstrap: [AppComponent]
})
export class AppModule { }
