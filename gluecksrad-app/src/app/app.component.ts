import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "./shared/service/authentication.service";
import {User} from "./shared/model/user";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Glücksrad';
  currentUser: User;
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }
  isActive(path:string):boolean {
    return this.router.url == path;
  }

  isPartOfPath(path:string):boolean{
    return this.router.url.includes(path);
  }

  logout() {
    this.authenticationService.logout();
  }
}
