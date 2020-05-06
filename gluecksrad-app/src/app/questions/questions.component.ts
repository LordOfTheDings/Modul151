import { Component, OnInit } from '@angular/core';
import {Question} from "./model/question";
import {HttpClient} from "@angular/common/http";
import {ApiService} from "../shared/api.service";

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  questions:Question[];
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getQuestions();
  }
public getQuestions(){
  this.apiService.getAllQuestions().subscribe(
  res=>{
    this.questions = res;
    alert(this.questions.length);
  },
  err=>{
    alert("An error has occured.")
  }
  );
}

}
