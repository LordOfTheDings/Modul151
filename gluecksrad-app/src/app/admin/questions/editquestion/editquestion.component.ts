import { Component, OnInit } from '@angular/core';
import {QuestionService} from "../../../shared/service/question.service";
import {Question} from "../../../shared/model/question";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Category} from "../../../shared/model/category";
import {CategoryService} from "../../../shared/service/category.service";
import {AuthGuard} from "../../../shared/guard/auth.guard";
import {InputValidationService} from "../../../shared/service/validation/input-validation.service";

@Component({
  selector: 'app-editquestion',
  templateUrl: './editquestion.component.html',
  styleUrls: ['./editquestion.component.css']
})
export class EditquestionComponent implements OnInit {
 currentQuestion:Question;
  categories: Category[];
  questionForm: FormGroup;
  submitted = false;
  error = '';
  loading = false;
  hasCurrent:boolean;
  allowedCharacters = new InputValidationService().getAllowedCharacters();
  validators = new InputValidationService().getValidators();

  constructor(private questionService: QuestionService,
              private categoryService: CategoryService,
              private router: Router,
              private formBuilder: FormBuilder,
               guard: AuthGuard,
               route:ActivatedRoute) {
    guard.canActivate(route.snapshot, router.routerState.snapshot);
    this.questionService.currentQuestion.subscribe(value => this.currentQuestion = value);
    this.hasCurrent = this.currentQuestion!=null;
  }

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe(
      res=>{
        this.categories = res;
      },
      err=>{
        alert("An error has occurred while trying to get categories!");
      }
    );
      this.questionForm = this.formBuilder.group({
        text: [this.hasCurrent?this.currentQuestion.text:'', this.validators],
        answerCorrect: [this.hasCurrent?this.currentQuestion.answerCorrect:'', this.validators],
        answerIncorrect: [this.hasCurrent?this.currentQuestion.answerIncorrect:'', this.validators],
        category: [this.hasCurrent?this.currentQuestion.category.id:null, this.validators],
      });
  }

  get f(){
    return this.questionForm.controls;
  }

  getQuestion():Question{
    let question = new Question();
    if(this.hasCurrent) {
       question = this.currentQuestion;
    }
    question.text = this.f.text.value;
    question.answerCorrect = this.f.answerCorrect.value;
    question.answerIncorrect = this.f.answerIncorrect.value;
    question.category = this.FindById(this.f.category.value);
    return question;
  }

  FindById(id:number):Category {
    for(let i = 0; i < this.categories.length; ++i){
      if(this.categories[i].id == id){
        return this.categories[i];
      }
    }
    return null;
  }

  save(){
    this.submitted = true;
    if (this.questionForm.invalid) {
      return;
    }
    this.loading = true;
    this.questionService.save(this.getQuestion(),this.hasCurrent).subscribe(
      res=>{
        this.router.navigateByUrl("admin/questions");
      },
      err=>{
        alert("An error has occured while trying to edit question!");
        this.error = err;
        this.loading = false;
      }
    )
  }

}
