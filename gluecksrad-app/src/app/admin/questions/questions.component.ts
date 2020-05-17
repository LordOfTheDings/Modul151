import { Component, OnInit } from '@angular/core';
import {Question} from "../../shared/model/question";
import {ActivatedRoute, Router} from "@angular/router";
import {QuestionService} from "../../shared/service/question.service";
import {AuthGuard} from "../../shared/guard/auth.guard";

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  questions:Question[];
  constructor(private questionService: QuestionService,
              private router: Router,
              route: ActivatedRoute,
              guard: AuthGuard) {
    guard.canActivate(route.snapshot, router.routerState.snapshot);
  }

  ngOnInit(): void {
    this.getQuestions();
  }

  public getQuestions(){
    this.questionService.getAllQuestions().subscribe(
  res=>{
      this.questions = res;
  },
  err=>{
      alert("An error has occured while trying to get questions!")
  }
  );
}

  addNewQuestion() {
    this.questionService.resetQuestion();
    this.router.navigateByUrl("/admin/questions/edit");
  }

  deleteQuestion(question: Question) {
    this.questionService.deleteQuestion(question).subscribe(
      res=>{
        location.reload();
      },
      error => {
        alert("error occurred while trying to delete question!");
      }
    );
  }

  editQuestion(question: Question) {
    this.questionService.setQuestion(question);
   this.router.navigateByUrl("admin/questions/edit");
  }

  deleteAll() {
    this.questionService.deleteAllQuestions().subscribe(
      res=>{
        location.reload();
      },
      error => {
        alert("error occurred while trying to delete questions!");
      }
    );
  }
}
