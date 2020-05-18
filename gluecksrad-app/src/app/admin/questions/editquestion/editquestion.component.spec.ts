import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditquestionComponent } from './editquestion.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {QuestionsComponent} from "../questions.component";
import {QuestionService} from "../../../shared/service/question.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthGuard} from "../../../shared/guard/auth.guard";
import {FormBuilder} from "@angular/forms";
import {CategoryService} from "../../../shared/service/category.service";
import {DebugElement} from "@angular/core";
import {RouterTestingModule} from "@angular/router/testing";

describe('EditquestionComponent', () => {
  let component: EditquestionComponent;
  let fixture: ComponentFixture<EditquestionComponent>;
  let de: DebugElement;

  beforeEach(async(() => {
    const fakeActivatedRoute = {
      snapshot: { data: {} }
    };
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
      ],
      providers:[
        QuestionService,
        CategoryService,
        Router,AuthGuard,
        ActivatedRoute,
        FormBuilder,
      ],
      declarations: [
        EditquestionComponent
      ],
    }).compileComponents();
  }));


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
