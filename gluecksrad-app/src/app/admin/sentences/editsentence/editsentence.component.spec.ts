import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditsentenceComponent } from './editsentence.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {FormBuilder} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {AuthGuard} from "../../../shared/guard/auth.guard";
import {CategoryService} from "../../../shared/service/category.service";
import {SentenceService} from "../../../shared/service/sentence.service";

describe('EditsentenceComponent', () => {
  let component: EditsentenceComponent;
  let fixture: ComponentFixture<EditsentenceComponent>;

  beforeEach(async(() => {
    const fakeActivatedRoute = {
      snapshot: { data: {} }
    };
    TestBed.configureTestingModule({
      declarations: [EditsentenceComponent],
      imports:[
        HttpClientTestingModule,
        RouterTestingModule,
      ],
      providers:[
        FormBuilder,
        AuthGuard,
        ActivatedRoute,
        CategoryService,
        SentenceService,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditsentenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
