import { Injectable } from '@angular/core';
import {Validators} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class InputValidationService {
  validators: Validators[] = [Validators.pattern('^[+ a-zA-Z0-9&?.,!@]{0,}$'),Validators.required];
  constructor() { }

  public getValidators(){
    return this.validators;
  }
  public getAllowedCharacters():string{
    return '+ a-zA-Z0-9&?.,!@';
  }
  public getPattern():string {
    return '^[+ a-zA-Z0-9&?.,!@]{0,}$';
  }
}
