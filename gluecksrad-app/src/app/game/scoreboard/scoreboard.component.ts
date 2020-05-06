import { Component, OnInit } from '@angular/core';
import {User} from "./model/user";
import {ApiService} from "../../shared/api.service";

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent implements OnInit {
 users: User[]=[];
  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
    this.showAllUsers();
  }

  showAllUsers():void{
    this.apiService.getAllUsers().subscribe(
      res=>{
        this.users = res;
      },
      error => {

      }
    )
  }
}
