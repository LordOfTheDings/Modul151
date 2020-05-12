import { Injectable } from '@angular/core';
import {Question} from "../model/question";
import {BehaviorSubject, Observable} from "rxjs";
import {User} from "../model/user";
import {ApiService} from "./api.service";
import {map} from "rxjs/operators";
import {Category} from "../model/category";

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private currentQuestionSubject: BehaviorSubject<Question>;
  public currentQuestion: Observable<Question>;

  constructor(private apiService: ApiService) {
    this.currentQuestionSubject = new BehaviorSubject<Question>(JSON.parse(localStorage.getItem('currentQuestion')));
    this.currentQuestion = this.currentQuestionSubject.asObservable();
  }

  setQuestion(question: Question){
    if(question != null) {
      localStorage.setItem('currentQuestion', JSON.stringify(question));
      this.currentQuestionSubject.next(question);
    }
  }

  resetQuestion(){
  localStorage.removeItem('currentQuestion');
  this.currentQuestionSubject.next(null);
  }

  save(question:Question,hasCurrent:boolean):Observable<Question>{
    if(hasCurrent){
      return this.apiService.editQuestion(question);
    }
    return this.apiService.addQuestion(question);
  }

  getAllQuestions() :Observable<Question[]>{
    return this.apiService.getAllQuestions();
  }

  deleteQuestion(question: Question):Observable<Question>{
    return this.apiService.deleteQuestion(question);
  }

  deleteAllQuestions() {
    return this.apiService.deleteAllQuestions()
  }
}
