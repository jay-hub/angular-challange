import { Injectable } from '@angular/core';
import { QuizList } from "../models/quizList.model";
import { Quiz } from "../models/quiz.model";

@Injectable({
    providedIn: 'root'
})

export class QuizService {
    Questions: QuizList;

    GetQuestions() : QuizList{
        this.Questions = new QuizList();
        this.Questions.Questions = [];
        this.Questions.Questions.push(
            {Question: "Which is the largest country in the world by population?", IsCorrect: false, QuestionNo: 1, 
                        Answers: [
                            {Answer: "India", IsCorrect:false,HasMarked:false, Id: 1},
                            {Answer: "USA", IsCorrect:false,HasMarked:false, Id: 2},
                            {Answer: "China", IsCorrect:true,HasMarked:false, Id: 3},
                            {Answer: "Russia", IsCorrect:false,HasMarked:false, Id: 4}                            
                    ]});
                    this.Questions.Questions.push(
                        {Question: "When did the second world war end?", IsCorrect: false, QuestionNo: 2, 
                                    Answers: [
                                        {Answer: "1945", IsCorrect:true,HasMarked:false, Id: 1},
                                        {Answer: "1939", IsCorrect:false,HasMarked:false, Id: 2},
                                        {Answer: "1944", IsCorrect:false,HasMarked:false, Id: 3},
                                        {Answer: "1942", IsCorrect:false,HasMarked:false, Id: 4}                            
                                ]});
                    this.Questions.Questions.push(
                        {Question: "Which was the first country to issue paper currency?", IsCorrect: false, QuestionNo: 3, 
                                    Answers: [
                                        {Answer: "France", IsCorrect:false,HasMarked:false, Id: 1},
                                        {Answer: "USA", IsCorrect:false,HasMarked:false, Id: 2},
                                        {Answer: "China", IsCorrect:true,HasMarked:false, Id: 3},
                                        {Answer: "Italy", IsCorrect:false,HasMarked:false, Id: 4}                            
                                ]});
                    this.Questions.Questions.push(
                        {Question: "Which city hosted the 1996 Summer Olympics?", IsCorrect: false, QuestionNo: 4, 
                                    Answers: [
                                        {Answer: "Athens", IsCorrect:false,HasMarked:false, Id: 1},
                                        {Answer: "Sydney", IsCorrect:false,HasMarked:false, Id: 2},
                                        {Answer: "Atlanta", IsCorrect:true,HasMarked:false, Id: 3},
                                        {Answer: "Beijing", IsCorrect:false,HasMarked:false, Id: 4}                            
                                ]});
                    this.Questions.Questions.push(
                        {Question: "Who invented telephone?", IsCorrect: false, QuestionNo: 5, 
                                    Answers: [
                                        {Answer: "Albert Einstein", IsCorrect:false,HasMarked:false, Id: 1},
                                        {Answer: "Isaac Newton", IsCorrect:false,HasMarked:false, Id: 2},
                                        {Answer: "Alexander Graham Bell", IsCorrect:true,HasMarked:false, Id: 3},
                                        {Answer: "Marie Curie", IsCorrect:false,HasMarked:false, Id: 4}                            
                                ]});

                return this.Questions;
    }
}