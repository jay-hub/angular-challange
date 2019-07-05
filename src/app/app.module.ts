import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { QuizService } from './services/quizService.service';
import { ResultComponent } from './components/result/result-component';

@NgModule({
  imports: [ BrowserModule, FormsModule, AppRoutingModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, WelcomeComponent, QuizComponent, ResultComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
