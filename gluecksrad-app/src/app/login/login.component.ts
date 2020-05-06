import { Component, OnInit } from '@angular/core';
import {ApiService} from "../shared/api.service";
import {User} from "../game/scoreboard/model/user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model : User ={
    userName:'',
    password:''
  };
  loggedIn :boolean = false;

  constructor(private router:Router, private apiService:ApiService) { }

  ngOnInit(): void {
  }
   login():void {
   this.apiService.logIn(this.model).subscribe(
     res=>{
       if(res!= null){
         this.loggedIn = true;
         this.model=res;
       }
     },
     err=>{
       alert("error");
     }
   )
    }
}

