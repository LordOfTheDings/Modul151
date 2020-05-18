import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SentencesComponent } from './sentences.component';
import {AuthGuard} from "../../shared/guard/auth.guard";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {SentenceService} from "../../shared/service/sentence.service";

describe('SentencesComponent', () => {
  let component: SentencesComponent;
  let fixture: ComponentFixture<SentencesComponent>;

  beforeEach(async(() => {
    const fakeActivatedRoute = {
      snapshot: { data: {} }
    };
    TestBed.configureTestingModule({
      declarations: [SentencesComponent],
      imports:[
        HttpClientTestingModule,
        RouterTestingModule,
      ],
      providers:[
        AuthGuard,
        fakeActivatedRoute,
        SentenceService,

      ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(SentencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
