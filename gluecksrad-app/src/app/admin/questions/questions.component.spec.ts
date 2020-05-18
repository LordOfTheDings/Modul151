import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsComponent } from './questions.component';
import {QuestionService} from "../../shared/service/question.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthGuard} from "../../shared/guard/auth.guard";
import {DebugElement} from "@angular/core";
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";
describe('QuestionsComponent', () => {
  let component: QuestionsComponent;
  let fixture: ComponentFixture<QuestionsComponent>;
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
        QuestionService,Router,AuthGuard,fakeActivatedRoute
      ],
      declarations: [
        QuestionsComponent
      ],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
