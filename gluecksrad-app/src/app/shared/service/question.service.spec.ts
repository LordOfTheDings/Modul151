import { TestBed } from '@angular/core/testing';

import { QuestionService } from './question.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {ApiService} from "./api.service";
import {Question} from "../model/question";

describe('QuestionService', () => {
  let service: QuestionService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[QuestionService]
    });
    service = TestBed.inject(QuestionService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


});
