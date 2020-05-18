import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreboardComponent } from './scoreboard.component';
import {ApiService} from "../../shared/service/api.service";
import {AuthenticationService} from "../../shared/service/authentication.service";
import {SentencesComponent} from "../../admin/sentences/sentences.component";
import {HttpClient, HttpHandler} from "@angular/common/http";
import {Router} from "@angular/router";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";

describe('ScoreboardComponent', () => {
  let component: ScoreboardComponent;
  let fixture: ComponentFixture<ScoreboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScoreboardComponent],
      providers:[
        ApiService,
        AuthenticationService,
      ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
    ],
    })
    .compileComponents();
    fixture = TestBed.createComponent(ScoreboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
