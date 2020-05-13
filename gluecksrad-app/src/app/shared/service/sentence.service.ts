import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {ApiService} from "./api.service";
import {Sentence} from "../model/Sentence";

@Injectable({
  providedIn: 'root'
})
export class SentenceService {
  private currentSentenceSubject: BehaviorSubject<Sentence>;
  public currentSentence: Observable<Sentence>;

  constructor(private apiService: ApiService) {
    this.currentSentenceSubject = new BehaviorSubject<Sentence>(JSON.parse(sessionStorage.getItem('currentSentence')));
    this.currentSentence = this.currentSentenceSubject.asObservable();
  }

  setSentence(sentence: Sentence) {
    if(sentence!=null) {
      sessionStorage.setItem('currentSentence', JSON.stringify(sentence));
      this.currentSentenceSubject.next(sentence);
    }
  }

  resetSentence() {
    sessionStorage.removeItem('currentSentence');
    this.currentSentenceSubject.next(null);
  }

  save(sentence: Sentence, hasCurrent: boolean): Observable<Sentence> {
    if (hasCurrent) {
      this.resetSentence();
      return this.apiService.editSentence(sentence);
    }
    return this.apiService.addSentence(sentence);
   }

  getAllSentences(): Observable<Sentence[]> {
    return this.apiService.getAllSentences();
  }

  deleteSentence(sentence: Sentence): Observable<Sentence> {
    return this.apiService.deleteSentence(sentence);
  }

  deleteAll() {
    return this.apiService.deleteAllSentences()
  }
}
