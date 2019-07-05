import { Component, OnInit } from '@angular/core';
import { QuizList } from 'src/app/models/quizList.model';
import { QuizService } from 'src/app/services/quizService.service';

@Component({
  selector: "quiz",
  templateUrl: "./quiz.component.html"
})

export class QuizComponent implements OnInit {

  quizCollection: QuizList;
  currentQuestion: number = 1;

  constructor(private quizService: QuizService){
    
  }

  markAnswer($event){
    let answer = this.quizCollection.Questions[this.currentQuestion-1].Answers.filter(p=>p.Id == +$event.target.value);
    this.quizCollection.Questions[this.currentQuestion-1].IsCorrect = answer[0].IsCorrect;    
  }

  result(){
    this.quizCollection.Questions.forEach(ques => {
      if(ques.IsCorrect)
        this.quizCollection.TotalCorrectAnswers++;
    });
    this.currentQuestion++;
  }

  nextQuestion(){
    this.currentQuestion++;
  }

  ngOnInit(){
    this.quizCollection = this.quizService.GetQuestions();
  }
}