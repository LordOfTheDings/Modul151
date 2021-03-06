import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';

import {Observable, throwError} from 'rxjs';
import {catchError} from "rxjs/operators";
import {AuthenticationService} from "../service/authentication.service";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private authenticationService: AuthenticationService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<any> {
  return next.handle(request).pipe(catchError(err =>{
    if(err.status===401){
      this.authenticationService.logout();
      location.reload();
    }
   const error = err.error.message || err.statusText;
    return throwError(error);
  }))
  }
}
