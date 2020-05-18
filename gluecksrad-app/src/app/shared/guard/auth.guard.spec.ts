import { TestBed } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {AuthenticationService} from "../service/authentication.service";

describe('AuthGuard', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[
        AuthenticationService,
      ],
      imports:[
        HttpClientTestingModule,
        RouterTestingModule,
      ]
    });
    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
