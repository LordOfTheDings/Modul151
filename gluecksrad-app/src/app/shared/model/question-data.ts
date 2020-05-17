import {Question} from "./question";

export class QuestionData{

  constructor(liquidAmount: number, question: Question) {
    this.liquidAmount = liquidAmount;
    this.question = question;
  }

  liquidAmount?: number;
  question?: Question;
}
