import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
model:UserViewModel = {
  name:'',
  score:0
};
  constructor(private http:HttpClient) { }
  ngOnInit(): void {
  }
  signup():void{
    let url = "http://localhost:4200/playgame";
    this.http.post(url,this.model).subscribe(
      res=>{
        location.reload();
      },
      error => {
        alert("An error occured, while trying to start the game.");
      },
    )
  }
}

export interface UserViewModel{
  name:string;
  score:number;
}
