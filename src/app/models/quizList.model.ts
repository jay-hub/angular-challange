import { Quiz } from "./quiz.model";

export class QuizList {
    public Questions: Quiz[];
    public TotalQuestions: number = 5;
    public TotalCorrectAnswers: number = 0;
}