import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";
import {Router} from "@angular/router";
import {Question} from "../model/question";
import {SentencesComponent} from "../../admin/sentences/sentences.component";
import {Sentence} from "../model/sentence";
import {ScoreboardEntry} from "../model/scoreboardEntry";
import {BehaviorSubject, Observable} from "rxjs";
import {Category} from "../model/category";
import {HttpClient} from "@angular/common/http";
import {Gamestate} from "../model/gamestate";
import {Player} from "../model/player";
import {observableToBeFn} from "rxjs/internal/testing/TestScheduler";
import {Guess} from "../model/guess";

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private BASE_URL="http://localhost:8080";
  private GET_RANDOM_QUESTION = `${this.BASE_URL}\\game\\get\\question`;
  private START_GAME =`${this.BASE_URL}\\game\\start`;
  private ADD_SCOREBOARD_ENTRY =`${this.BASE_URL}\\game\\scoreboard\\add`;
  private GUESS_SENTENCE = `${this.BASE_URL}\\game\\guess\\sentence`;
  private GUESS_QUESTION = `${this.BASE_URL}\\game\\guess\\question`;
  private GUESS_CHARACTER = `${this.BASE_URL}\\game\\guess\\character`;
  private TURN_WHEEL = `${this.BASE_URL}\\game\\turnwheel`;


  private gameStateSubject: BehaviorSubject<Gamestate>;
  public gameState: Observable<Gamestate>;
  private playerSubject: BehaviorSubject<Player>;
  public player: Observable<Player>;

  constructor(private http: HttpClient) {
    this.gameStateSubject = new BehaviorSubject<Gamestate>(JSON.parse(sessionStorage.getItem('gameState')));
    this.gameState = this.gameStateSubject.asObservable();
    this.playerSubject = new BehaviorSubject<Player>(JSON.parse(sessionStorage.getItem('player')));
    this.player = this.playerSubject.asObservable();
  }

  setPlayer(player: Player){
    sessionStorage.setItem('player', JSON.stringify(player));
    this.playerSubject.next(player);
  }

  async turnWheel(){
   await this.http.get<Gamestate>(this.TURN_WHEEL).toPromise().then(
     result=>{
      sessionStorage.setItem('gameState',JSON.stringify(result));
      this.gameStateSubject.next(result);
    });
    return this.gameState;
  }

  endGame(entry?: ScoreboardEntry):Observable<ScoreboardEntry>{
    if(!entry){
      return;
    }
    sessionStorage.removeItem('gameState');
    this.gameStateSubject.next(null);
    sessionStorage.removeItem('player');
    this.playerSubject.next(null);
    return this.http.post<ScoreboardEntry>(this.ADD_SCOREBOARD_ENTRY,entry);
  }

  async startGame(){
   await  this.http.get<Gamestate>(this.START_GAME).toPromise().then(
      res=>{
        sessionStorage.setItem('gameState', JSON.stringify(res));
        this.gameStateSubject.next(res);
      },
       error => {
         alert("error while trying to start game");
       }
    );
  }

  async getRandomQuestion() {
    await this.http.get<Gamestate>(this.GET_RANDOM_QUESTION).toPromise().then(
       res=>{
         sessionStorage.setItem('gameState', JSON.stringify(res));
         this.gameStateSubject.next(res);
       },
       error => {
         alert("error while trying to get question");
       }
     );
     return this.gameState;
  }

  async guess(guessedSentence: string) {
    await this.http.post<Gamestate>(this.GUESS_SENTENCE,guessedSentence).toPromise().then(
      res=>{
        sessionStorage.setItem('gameState',JSON.stringify(res));
        this.gameStateSubject.next(res);
    });
    return this.gameState;
  }

  async guessCharacter(scoreOnStake: number, character: string){
    await this.http.post<Gamestate>(this.GUESS_CHARACTER, new Guess(character,scoreOnStake)).toPromise().then(
      res=>{
        sessionStorage.setItem('gameState',JSON.stringify(res));
        this.gameStateSubject.next(res);
      }
    );
     return this.gameState;
  }

  async guessQuestionAnswer(guess: Guess){
    await this.http.post<Gamestate>(this.GUESS_QUESTION,guess).toPromise().then(
      res=>{
        sessionStorage.setItem('gameState',JSON.stringify(res));
        this.gameStateSubject.next(res);
      }
    );
    return this.gameState;
  }
}
