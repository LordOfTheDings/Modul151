import { Component, OnInit } from '@angular/core';
import {User} from "../shared/model/user";
import { Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../shared/service/authentication.service";
import {first} from "rxjs/operators";
import {InputValidationService} from "../shared/service/validation/input-validation.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  error = '';
  allowedCharacters = new InputValidationService().getAllowedCharacters();
  validators = new InputValidationService().getValidators();

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
  }
ngOnInit(): void {
  this.loginForm = this.formBuilder.group({
    username: ['', this.validators],
    password: ['', this.validators]
  });
}
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.authenticationService.login(this.f.username.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigateByUrl('home');
        },
        error => {
          this.error = error;
          this.loading = false;
        });
  }
}

