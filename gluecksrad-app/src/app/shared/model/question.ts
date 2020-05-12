import {Category} from "./category";

export class Question {
  constructor() {
  }

Id?: number;
text?: string;
answerCorrect?: string;
answerIncorrect?: string;
category?: Category;
}
