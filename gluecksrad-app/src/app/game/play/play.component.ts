import {Component, OnInit} from '@angular/core';
import {ScoreboardEntry} from "../../shared/model/scoreboardEntry";
import {GameService} from "../../shared/service/game.service";
import {Gamestate} from "../../shared/model/gamestate";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import {InputValidationService} from "../../shared/service/validation/input-validation.service";
import {Player} from "../../shared/model/player";
import {PlayMode} from "../../shared/model/playmode.enum";

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {
  scoreboardEntry: ScoreboardEntry;
  gameState: Gamestate;
  sentenceForm: FormGroup;
  player:Player;
  noVocalsLeft: boolean = false;
  noConsonantsLeft: boolean = false;
  allowedCharacters = new InputValidationService().getAllowedCharacters();
  validators = new InputValidationService().getValidators();

   constructor(private gameService:GameService,
              private router: Router,
              private formBuilder: FormBuilder) {
     this.gameService.gameState.subscribe(state=> this.gameState = state);
     this.gameService.player.subscribe(player => this.player = player);
  }

    ngOnInit() {
      this.sentenceForm = this.formBuilder.group({
      sentence: ['', this.validators]
    });
    this.gameService.startGame();
  }

  playRisk():void{
    this.gameService.getRandomQuestion();
  }

    async guess(){
     if(this.f.invalid){
       return;
     }
     await this.gameService.guess(this.f.sentence.value);
     if(this.gameState.isWon){
       alert("You have won!");
       this.endSession();
     }
    this.checkForLost();
  }

  get f(){
   return this.sentenceForm.controls;
  }

  checkForLost():void{
    if(this.gameState.lives <=0 || (this.gameState.nothingLeftToGuess && this.gameState.score <400)){
      alert("Game over!");
      this.router.navigateByUrl("game");
    }
  }

  endSession():void{
    this.scoreboardEntry = new ScoreboardEntry(this.player.nickName,
    this.gameState.score,
    new Date(),
    this.gameState.roundsPlayed);
    this.gameService.endGame(this.scoreboardEntry).subscribe(
      res=>{
        this.router.navigateByUrl("game/scoreboard");
      },error => {
        alert("error");
      }
    );
  }

  async turnWheel() {
   await this.gameService.turnWheel();
     switch(this.gameState.currentMode.toString()){
       case "MONEY":
         let amount = this.getAmount();
         //get consonant from dialog
         this.gameService.guessCharacter(amount,"e");
         break;
       case "BANKRUPT":
         this.gameState.lives = 0;
         break;
       case "RISK":
         //show questiondialog
         //call backend for validation
         break;
     }
     this.checkForLost();
  }

  getAmount():number{
     let x=  Math.floor(Math.random()*1001)+99;
     return Math.round(x/200)*200;
  }

  buyVocal() {
     //get vocal from dialog if not taken yet
     //inform backend which adjusts score,rounds and lives
     this.gameState.score-=400;
  }
}
