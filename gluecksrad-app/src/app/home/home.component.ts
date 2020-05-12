import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../shared/service/authentication.service";
import {User} from "../shared/model/user";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
user:User;
  constructor(private authenticationService:AuthenticationService) {
    this.authenticationService.currentUser.subscribe(value => this.user = value);
  }

  ngOnInit(): void {
  }

}
