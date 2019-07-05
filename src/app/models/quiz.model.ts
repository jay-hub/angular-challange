import { Answer } from "./answer.model";

export class Quiz {
    public QuestionNo: number;
    public Question: string;
    public Answers: Answer[]
    public IsCorrect: boolean;
}