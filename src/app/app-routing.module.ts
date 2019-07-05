import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { ResultComponent } from './components/result/result-component';

const routes : Routes = [
  {path: '', component: WelcomeComponent},
  {path:'quiz', component: QuizComponent},
  {path: 'result', component: ResultComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }