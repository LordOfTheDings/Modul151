import { TestBed } from '@angular/core/testing';

import { InputValidationService } from './input-validation.service';

describe('InputvalidationService', () => {
  let service: InputValidationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InputValidationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
