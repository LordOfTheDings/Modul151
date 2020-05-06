import {Answer} from "./answer";
import {Category} from "./category";

export interface Question {
Id?: number;
text?: string;
answerCorrect?: Answer;
answerIncorrect?: Answer;
category?: Category;
}
