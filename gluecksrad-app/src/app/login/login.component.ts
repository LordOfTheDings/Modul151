import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model : LoginViewModel ={
    username:'',
    password:''
  };

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
   login():void{
    let url = "http://localhost:4200/login";
    this.http.post(url,this.model).subscribe(
      res=>{
        location.reload();
      },
      error => {
        alert("An error occured, while sending login data.");
      },
    )
  }
}
export interface LoginViewModel {
  password: string;
  username : string;
}
