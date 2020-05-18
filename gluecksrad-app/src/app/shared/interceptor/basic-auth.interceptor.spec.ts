import { TestBed } from '@angular/core/testing';

import { BasicAuthInterceptor } from './basic-auth.interceptor';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";

describe('BasicAuthInterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      BasicAuthInterceptor
      ],
    imports:[
      HttpClientTestingModule,
      RouterTestingModule,
    ]
  }));

  it('should be created', () => {
    const interceptor: BasicAuthInterceptor = TestBed.inject(BasicAuthInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
