import {Component, OnInit} from '@angular/core';
import {ScoreboardEntry} from "../../shared/model/scoreboardEntry";
import {GameService} from "../../shared/service/game.service";
import {Gamestate} from "../../shared/model/gamestate";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import {InputValidationService} from "../../shared/service/validation/input-validation.service";
import {Player} from "../../shared/model/player";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {ConsonantInputDialog} from "./dialog/consonant-input-dialog.component";
import {VocalInputDialogComponent} from "./dialog/vocal-input-dialog.component";
import {QuestionDialogComponent} from "./dialog/question-dialog.component";
import {QuestionData} from "../../shared/model/question-data";
import {DatePipe} from "@angular/common";

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
  allowedCharacters = new InputValidationService().getAllowedCharacters();
  validators = new InputValidationService().getValidators();

   constructor(private gameService:GameService,
              private router: Router,
              private formBuilder: FormBuilder,
               public dialog: MatDialog) {
     this.gameService.gameState.subscribe(state=> this.gameState = state);
     this.gameService.player.subscribe(player => this.player = player);
  }

    ngOnInit() {
      this.sentenceForm = this.formBuilder.group({
      sentence: ['', this.validators]
    });
    this.gameService.startGame();
  }

  async guess(){
   if(this.f.invalid){
     return;
   }
   await this.gameService.guess(this.f.sentence.value);
   this.checkForLost();
   this.checkForWon();
  }

  get f(){
   return this.sentenceForm.controls;
  }

  checkForLost():void{
    if(this.gameState.lives <= 0 || (this.gameState.nothingLeftToGuess && this.gameState.score <400)){
      alert("Game over!");
      this.gameService.endGame();
      this.router.navigateByUrl("game");
    }
  }

  checkForWon():void{
    if(this.gameState.isWon){
    alert("You have won!");
    this.endSession();
    }
  }

  async turnWheel() {
   await this.gameService.turnWheel();
     switch(this.gameState.currentMode.toString()){
       case "MONEY":
        await this.playMoney();
         break;
       case "BANKRUPT":
        await this.gameService.setBankrupt(true);
         break;
       case "RISK":
        await this.playRisk();
         break;
     }
  }

  getAmount():number{
    let x=  Math.floor(Math.random()*1001)+99;
    return Math.round(x/200)*200;
  }

 async playMoney(){
    let amountAtStake = this.getAmount();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = amountAtStake;
    dialogConfig.disableClose = true;

    const dialogRef =  this.dialog.open(ConsonantInputDialog,dialogConfig);
    await dialogRef.afterClosed().toPromise().then(
     async data =>{
       await this.gameService.guessCharacter(amountAtStake,data);
      },
      err=>{
        alert("error");
      }
    );
    if(this.gameState.nothingLeftToGuess){
      alert("Only vocals left!");
    }
        this.checkForLost();
        this.checkForWon();
  }

 async buyVocal() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    const dialogRef =  this.dialog.open(VocalInputDialogComponent,dialogConfig);
    await dialogRef.afterClosed().toPromise().then(
    async data =>{
       await this.gameService.guessCharacter(0,data);
      },
      err=>{
        alert("error");
      }
    );
    this.checkForLost();
    this.checkForWon();
  }

  async playRisk(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    await this.gameService.getRandomQuestion();
    dialogConfig.position = {
      top: '300',
      left: '400',
    };

    dialogConfig.data =new QuestionData(this.gameState.score,this.gameState.currentQuestion);
    const dialogRef =  this.dialog.open(QuestionDialogComponent,dialogConfig);
    await dialogRef.afterClosed().toPromise().then(
      guess =>{
        this.gameService.guessQuestionAnswer(guess);
      },
      err=>{
        alert("error");
      }
    );
    this.checkForLost();
    this.checkForWon();
  }

  endSession():void{
    let datePipe = new DatePipe('de');
    let date = datePipe.transform(Date.now().toString(),"dd.MM.yyyy, hh:mm");
    this.scoreboardEntry = new ScoreboardEntry(this.player.nickName, this.gameState.score, this.gameState.roundsPlayed,date);
    this.gameService.endGame(this.scoreboardEntry).subscribe(
      res=>{
        this.router.navigateByUrl("game/scoreboard");
      },error => {
        alert("error");
      }
    );
  }
}
