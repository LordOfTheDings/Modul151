import {Category} from "./category";

export class Question {
  constructor() {
  }

id?: number;
text?: string;
answerCorrect?: string;
answerIncorrect?: string;
category?: Category;
}
