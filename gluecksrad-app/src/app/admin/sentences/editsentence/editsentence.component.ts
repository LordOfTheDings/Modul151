import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {SentenceService} from "../../../shared/service/sentence.service";
import {Category} from "../../../shared/model/category";
import {FormBuilder, FormGroup} from "@angular/forms";
import {CategoryService} from "../../../shared/service/category.service";
import {Sentence} from "../../../shared/model/sentence";
import {AuthGuard} from "../../../shared/guard/auth.guard";
import {InputValidationService} from "../../../shared/service/validation/input-validation.service";

@Component({
  selector: 'app-editsentence',
  templateUrl: './editsentence.component.html',
  styleUrls: ['./editsentence.component.css']
})
export class EditsentenceComponent implements OnInit {
  currentSentence:Sentence;
  categories: Category[];

  hasCurrent = false;
  sentenceForm: FormGroup;
  submitted = false;
  error = '';
  loading = false;
  allowedCharacters = new InputValidationService().getAllowedCharacters();
  validators = new InputValidationService().getValidators();

  constructor(private sentenceService:SentenceService,
              private categoryService: CategoryService,
              private router: Router,
              private formBuilder: FormBuilder,
              guard: AuthGuard,
              route: ActivatedRoute,) {
    guard.canActivate(route.snapshot, router.routerState.snapshot);
    this.sentenceService.currentSentence.subscribe(value => this.currentSentence = value);
    this.hasCurrent = this.currentSentence != null;
  }
  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe(
      res=>{
        this.categories = res;
      },
      err=>{
        alert("An error has occured while trying to get categories!");
      }
    );
      this.sentenceForm = this.formBuilder.group({
        text: [this.hasCurrent?this.currentSentence.sentence:'',this.validators],
        category: [this.hasCurrent?this.currentSentence.category.id:1,this.validators],
      });
    }

  get f(){
    return this.sentenceForm.controls;
  }

  FindById(id:number):Category {
    for(let i = 0; i < this.categories.length; ++i){
      if(this.categories[i].id == id){
        return this.categories[i];
      }
    }
    return null;
  }

  private getSentence():Sentence {
    let sentence = new Sentence();
    if(this.hasCurrent){
      sentence = this.currentSentence;
    }
    sentence.sentence = this.f.text.value;
    sentence.category = this.FindById(this.f.category.value);
    return sentence;
  }

  save(){
    this.submitted = true;
    if (this.sentenceForm.invalid) {
      return;
    }
    this.loading = true;
    this.sentenceService.save(this.getSentence(),this.hasCurrent).subscribe(
      res=>{
        this.router.navigateByUrl("admin/sentences");
      },
      err=>{
        alert("An error has occured while trying to edit sentence!");
        this.error = err;
        this.loading = false;
      }
    )
  }
}

