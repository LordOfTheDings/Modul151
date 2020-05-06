import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Question} from "../questions/model/question";
import {Observable} from "rxjs";
import {User} from "../game/scoreboard/model/user";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private BASE_URL="http://localhost:8080";
  private ALL_USERS_URL = `${this.BASE_URL}\\admin\\users\\all`;
  private ALL_QUESTIONS_URL = `${this.BASE_URL}\\admin\\questions\\all`;
  private LOGIN_REQUEST_URL = `${this.BASE_URL}\\admin\\login`;

private users:User[]=[];
  constructor(private http:HttpClient) {

  }

  getAllQuestions() : Observable<Question[]>{
    return this.http.get<Question[]>(this.ALL_QUESTIONS_URL);
}

 getAllUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.ALL_USERS_URL);
}

  logIn(user:User): Observable<User> {
    alert(user.userName);
    return this.http.post<User>(this.LOGIN_REQUEST_URL, user);
  }
}
