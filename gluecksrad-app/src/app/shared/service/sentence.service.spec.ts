import { TestBed } from '@angular/core/testing';

import { SentenceService } from './sentence.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";

describe('SentenceService', () => {
  let service: SentenceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule,
        RouterTestingModule,
      ],
    });

    service = TestBed.inject(SentenceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
