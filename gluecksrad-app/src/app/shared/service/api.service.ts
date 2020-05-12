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
  private ALL_USERS_URL = `${this.BASE_URL}\\admin\\users\\all`;
  private ALL_QUESTIONS_URL = `${this.BASE_URL}\\admin\\questions\\all`;
  private ALL_CATEGORIES_URL = `${this.BASE_URL}\\admin\\categories\\all`;
  private ALL_SENTENCES_URL = `${this.BASE_URL}\\admin\\sentences\\all`;
  private LOGIN_REQUEST_URL = `${this.BASE_URL}\\admin\\login`;
  private DELETE_QUESTION_URL = `${this.BASE_URL}\\admin\\questions\\delete`;
  private ADD_QUESTION_URL = `${this.BASE_URL}\\admin\\questions\\add`;
  private EDIT_QUESTION_URL = `${this.BASE_URL}\\admin\\questions\\edit`;
  private DELETE_ALL_QUESTIONS_URL= `${this.BASE_URL}\\admin\\questions\\delete\\all`;
  private DELETE_CATEGORY_URL = `${this.BASE_URL}\\admin\\categories\\delete`;
  private EDIT_CATEGORY_URL = `${this.BASE_URL}\\admin\\categories\\edit`;
  private ADD_CATEGORY_URL = `${this.BASE_URL}\\admin\\categories\\add`;
  private DELETE_SENTENCE_URL = `${this.BASE_URL}\\admin\\sentences\\delete`;
  private EDIT_SENTENCE_URL = `${this.BASE_URL}\\admin\\sentences\\edit`;
  private ADD_SENTENCE_URL = `${this.BASE_URL}\\admin\\sentences\\add`;
  private DELETE_ALL_SENTENCES_URL = `${this.BASE_URL}\\admin\\sentences\\delete\\all`;
  private SCOREBOARD_URL = `${this.BASE_URL}\\game\\scoreboard\\all`;
  private DELETE_SCOREBOARD_ENTRY_URL = `${this.BASE_URL}\\game\\scoreboard\\delete`;
  private ADD_SCOREBOARD_ENTRY_URL = `${this.BASE_URL}\\game\\scoreboard\\add`;
  constructor(private http:HttpClient) {

  }

  getAllQuestions() : Observable<Question[]>{
    return this.http.get<Question[]>(this.ALL_QUESTIONS_URL);
}

  getAllUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.ALL_USERS_URL);
  }

  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.ALL_CATEGORIES_URL);
  }

  getAllSentences(): Observable<Category[]>  {
    return this.http.get<Category[]>(this.ALL_SENTENCES_URL);
  }

  getAllScoreboardEntries():Observable<ScoreboardEntry[]>{
    return this.http.get<ScoreboardEntry[]>(this.SCOREBOARD_URL);
  }

  addScoreBoardEntry(entry:ScoreboardEntry):Observable<ScoreboardEntry>{
    return this.http.post<ScoreboardEntry>(this.ADD_SCOREBOARD_ENTRY_URL,entry);
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
    return this.http.delete<ScoreboardEntry>(this.DELETE_SCOREBOARD_ENTRY_URL+"?id="+entry.id);
  }

  deleteAllSentences():Observable<Sentence[]> {
    return this.http.delete<Sentence[]>(this.DELETE_ALL_SENTENCES_URL);
  }

  deleteAllQuestions():Observable<Question[]> {
    return this.http.delete<Question[]>(this.DELETE_ALL_QUESTIONS_URL);
  }
}
