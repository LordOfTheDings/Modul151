import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesComponent } from './categories.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {QuestionsComponent} from "../questions/questions.component";
import {QuestionService} from "../../shared/service/question.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthGuard} from "../../shared/guard/auth.guard";
import {CategoryService} from "../../shared/service/category.service";

describe('CategoriesComponent', () => {
  let component: CategoriesComponent;
  let fixture: ComponentFixture<CategoriesComponent>;

  beforeEach(async(() => {
    const fakeActivatedRoute = {
      snapshot: { data: {} }
    };
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      declarations: [CategoriesComponent],
      providers:[CategoryService,Router,AuthGuard,fakeActivatedRoute],
    })
      .compileComponents();
    fixture = TestBed.createComponent(CategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
