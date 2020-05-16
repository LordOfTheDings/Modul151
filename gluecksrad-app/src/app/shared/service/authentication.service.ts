import { Injectable } from '@angular/core';
import {User} from "../model/user";
import {BehaviorSubject, Observable} from "rxjs";
import {map} from "rxjs/operators";

import {ApiService} from "./api.service";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
   private currentUserSubject: BehaviorSubject<User>;
   public currentUser: Observable<User>;

  constructor( private apiService: ApiService, private router:Router ) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(sessionStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public getCurrentUserValue():User{
    return this.currentUserSubject.value;
  }

  login(userName: string, password:string){
    return this.apiService.logIn({ userName, password})
      .pipe(map(user=>{
        user.authData = window.btoa(userName +':' + password);
        sessionStorage.setItem('currentUser',JSON.stringify(user));
        this.currentUserSubject.next(user);
      }));
  }

  logout(){
    sessionStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.router.navigateByUrl('login');
  }
}
