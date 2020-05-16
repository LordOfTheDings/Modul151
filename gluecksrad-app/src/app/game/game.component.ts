import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {InputValidationService} from "../shared/service/validation/input-validation.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {GameService} from "../shared/service/game.service";
import {Player} from "../shared/model/player";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
    validators= new InputValidationService().getValidators();
    allowedCharacters = new InputValidationService().getAllowedCharacters();
    model:UserViewModel;
  playForm: FormGroup;
  submitted: boolean;
  constructor(private http:HttpClient,
              private router: Router,
              private formBuilder:FormBuilder,
              private gameService:GameService) { }

  ngOnInit(): void {
    this.playForm = this.formBuilder.group({
      nickname: ['',this.validators]
    });
  }

  get f(){
    return this.playForm.controls;
  }
  signUp():void{
    this.submitted = true;
    if(this.playForm.invalid){
      return;
    }

    this.submitted= true;
    this.gameService.setPlayer(new Player(this.f.nickname.value));
    this.router.navigateByUrl('/game/play')
  }
}

export interface UserViewModel{
  name:string;
  score:number;
}
