import { TestBed } from '@angular/core/testing';

import { ErrorInterceptor } from './error.interceptor';
import {HttpClient, HttpHandler} from "@angular/common/http";
import {ApiService} from "../service/api.service";
import {AuthenticationService} from "../service/authentication.service";
import {Router} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('ErrorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ErrorInterceptor,
      AuthenticationService,
      ],
    imports:[
      RouterTestingModule,
      HttpClientTestingModule,
    ]
  }));

  it('should be created', () => {
    const interceptor: ErrorInterceptor = TestBed.inject(ErrorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
