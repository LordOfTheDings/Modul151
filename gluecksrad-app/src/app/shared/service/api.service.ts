import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Question} from "../model/question";
import {Observable} from "rxjs";
import {User} from "../model/user";
import {Category} from "../model/category";
import {Sentence} from "../model/sentence";
import {ScoreboardEntry} from "../model/scoreboardEntry";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private BASE_URL="http://localhost:8080";
  public ALL_QUESTIONS_URL = `${this.BASE_URL}\\admin\\questions\\all`;
  public ALL_CATEGORIES_URL = `${this.BASE_URL}\\admin\\categories\\all`;
  public ALL_SENTENCES_URL = `${this.BASE_URL}\\admin\\sentences\\all`;
  public LOGIN_REQUEST_URL = `${this.BASE_URL}\\admin\\login`;
  public DELETE_QUESTION_URL = `${this.BASE_URL}\\admin\\questions\\delete`;
  public ADD_QUESTION_URL = `${this.BASE_URL}\\admin\\questions\\add`;
  public EDIT_QUESTION_URL = `${this.BASE_URL}\\admin\\questions\\edit`;
  public DELETE_ALL_QUESTIONS_URL= `${this.BASE_URL}\\admin\\questions\\delete\\all`;
  public DELETE_CATEGORY_URL = `${this.BASE_URL}\\admin\\categories\\delete`;
  public EDIT_CATEGORY_URL = `${this.BASE_URL}\\admin\\categories\\edit`;
  public ADD_CATEGORY_URL = `${this.BASE_URL}\\admin\\categories\\add`;
  public DELETE_SENTENCE_URL = `${this.BASE_URL}\\admin\\sentences\\delete`;
  public EDIT_SENTENCE_URL = `${this.BASE_URL}\\admin\\sentences\\edit`;
  public ADD_SENTENCE_URL = `${this.BASE_URL}\\admin\\sentences\\add`;
  public DELETE_ALL_SENTENCES_URL = `${this.BASE_URL}\\admin\\sentences\\delete\\all`;
  public SCOREBOARD_URL = `${this.BASE_URL}\\game\\scoreboard\\all`;
  public DELETE_SCOREBOARD_ENTRY_URL = `${this.BASE_URL}\\game\\scoreboard\\delete`;

  constructor(private http:HttpClient) {
  }

  getAllQuestions() : Observable<Question[]>{
    return this.http.get<Question[]>(this.ALL_QUESTIONS_URL);
  }

  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.ALL_CATEGORIES_URL);
  }

  getAllSentences(): Observable<Sentence[]>  {
    return this.http.get<Sentence[]>(this.ALL_SENTENCES_URL);
  }

  getAllScoreboardEntries():Observable<ScoreboardEntry[]>{
    return this.http.get<ScoreboardEntry[]>(this.SCOREBOARD_URL);
  }

  logIn(user:User): Observable<User> {
    return this.http.post<User>(this.LOGIN_REQUEST_URL,user);
  }

  deleteQuestion(question: Question): Observable<Question> {
    return this.http.post<Question>(this.DELETE_QUESTION_URL,question);
  }

  editQuestion(question: Question): Observable<Question>  {
    return this.http.post<Question>(this.EDIT_QUESTION_URL,question);
  }

  addQuestion(question: Question): Observable<Question>  {
    return this.http.post<Question>(this.ADD_QUESTION_URL,question);
  }

  editCategory(category: Category): Observable<Category>  {
    return this.http.post<Category>(this.EDIT_CATEGORY_URL,category);
  }

  addCategory(category: Category): Observable<Category>  {
    return this.http.post<Category>(this.ADD_CATEGORY_URL,category);
  }

  deleteCategory(category: Category): Observable<Category>  {
    return this.http.post<Category>(this.DELETE_CATEGORY_URL,category);
  }

  deleteSentence(sentence: Sentence): Observable<Sentence>  {
    return this.http.post<Sentence>(this.DELETE_SENTENCE_URL,sentence);
  }

  addSentence(sentence: Sentence): Observable<Sentence>  {
    return this.http.post<Sentence>(this.ADD_SENTENCE_URL,sentence);
  }

  editSentence(sentence: Sentence): Observable<Sentence> {
    return this.http.post<Sentence>(this.EDIT_SENTENCE_URL,sentence);
  }

  deleteScoreboardEntry(entry:ScoreboardEntry): Observable<ScoreboardEntry> {
    return this.http.post<ScoreboardEntry>(this.DELETE_SCOREBOARD_ENTRY_URL,entry);
  }

  deleteAllSentences():Observable<Sentence[]> {
    return this.http.delete<Sentence[]>(this.DELETE_ALL_SENTENCES_URL);
  }

  deleteAllQuestions():Observable<Question[]> {
    return this.http.delete<Question[]>(this.DELETE_ALL_QUESTIONS_URL);
  }
}
