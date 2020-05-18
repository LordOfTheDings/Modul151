import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';
import {Question} from "../model/question";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {Sentence} from "../model/sentence";
import {Category} from "../model/category";
import {User} from "../model/user";
import {ScoreboardEntry} from "../model/scoreboardEntry";

describe('ApiService', () => {
  let service: ApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[ApiService]
    });
    service = TestBed.inject(ApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all questions from http',()=>{
    let questions:Question[] = [
      {id:1, text:'yesno',answerCorrect:'yes',answerIncorrect:'no',category:{
          id:1,text:'testing'
        }}
    ];
    service.getAllQuestions().subscribe(
      res=>{
        expect(res.length).toBe(1);
        expect(res).toEqual(questions);
      });

    let request = httpMock.expectOne(service.ALL_QUESTIONS_URL);
    expect(request.request.method).toBe("GET");
    request.flush(questions);
  });

  it('should get all sentences from http',()=>{
    let sentences:Sentence[] = [
      {id:1, sentence:'yesno',category:{
          id:1,text:'testing'
        }}
    ];
    service.getAllSentences().subscribe(
      res=>{
        expect(res.length).toBe(1);
        expect(res).toEqual(sentences);
      });

    let request = httpMock.expectOne(service.ALL_SENTENCES_URL);
    expect(request.request.method).toBe("GET");
    request.flush(sentences);
  });

  it('should get all categories from http',()=>{
    let categories:Category[] = [
      {id:1, text:'yesno',}
    ];
    service.getAllCategories().subscribe(
      res=>{
        expect(res.length).toBe(1);
        expect(res).toEqual(categories);
      });

    let request = httpMock.expectOne(service.ALL_CATEGORIES_URL);
    expect(request.request.method).toBe("GET");
    request.flush(categories);
  });

  it('should delete a category via http',()=>{
    let category:Category = {id:1, text:'yesno',};

    service.deleteCategory(category).subscribe(
      res=>{
        expect(res).toEqual(category);
      });

    let request = httpMock.expectOne(service.DELETE_CATEGORY_URL);
    expect(request.request.method).toBe("POST");
    request.flush(category);
  });

  it('should add a category via http',()=>{
    let category:Category = {id:1, text:'yesno',};

    service.addCategory(category).subscribe(
      res=>{
        expect(res).toEqual(category);
      });

    let request = httpMock.expectOne(service.ADD_CATEGORY_URL);
    expect(request.request.method).toBe("POST");
    request.flush(category);
  });

  it('should edit a category via http',()=>{
    let category:Category = {id:1, text:'yesno',};

    service.editCategory(category).subscribe(
      res=>{
        expect(res).toEqual(category);
      });

    let request = httpMock.expectOne(service.EDIT_CATEGORY_URL);
    expect(request.request.method).toBe("POST");
    request.flush(category);
  });

  it('should add a sentence via http',()=>{
    let sentence:Sentence = {id:1, sentence:'yesno',};

    service.addSentence(sentence).subscribe(
      res=>{
        expect(res).toEqual(sentence);
      });

    let request = httpMock.expectOne(service.ADD_SENTENCE_URL);
    expect(request.request.method).toBe("POST");
    request.flush(sentence);
  });

  it('should delete a sentence via http',()=>{
    let sentence:Sentence = {id:1, sentence:'yesno',};

    service.deleteSentence(sentence).subscribe(
      res=>{
        expect(res).toEqual(sentence);
      });

    let request = httpMock.expectOne(service.DELETE_SENTENCE_URL);
    expect(request.request.method).toBe("POST");
    request.flush(sentence);
  });

  it('should delete all sentences via http',()=>{
    let sentences:Sentence[] = [{id:1, sentence:'yesno',}];

    service.deleteAllSentences().subscribe(
      res=>{
        expect(res.length).toBe(0);
        expect(res).toEqual(sentences);
      });

    let request = httpMock.expectOne(service.DELETE_ALL_SENTENCES_URL);
    expect(request.request.method).toBe("DELETE");
    request.flush(null);
  });

  it('should edit a sentence via http',()=>{
    let sentence:Sentence = {id:1, sentence:'yesno',};

    service.editSentence(sentence).subscribe(
      res=>{
        expect(res).toEqual(sentence);
      });

    let request = httpMock.expectOne(service.EDIT_SENTENCE_URL);
    expect(request.request.method).toBe("POST");
    request.flush(sentence);
  });

  it('should send a login request via http',()=>{
    let user: User = {id:1, userName:'yesno', password:'no',authData:'no'};

    service.logIn(user).subscribe(
      res=>{
        expect(res).toEqual(user);
      });

    let request = httpMock.expectOne(service.LOGIN_REQUEST_URL);
    expect(request.request.method).toBe("POST");
    request.flush(user);
  });

  it('should delete a question via http',()=>{
    let question: Question = {id:1, text:'yesno',answerCorrect:'yes',answerIncorrect:'no',category:{
        id:1,text:'testing'
      }};

    service.deleteQuestion(question).subscribe(
      res=>{
        expect(res).toEqual(question);
      });

    let request = httpMock.expectOne(service.DELETE_QUESTION_URL);
    expect(request.request.method).toBe("POST");
    request.flush(question);
  });

  it('should add a question via http',()=>{
    let question: Question = {id:1, text:'yesno',answerCorrect:'yes',answerIncorrect:'no',category:{
        id:1,text:'testing'
      }};

    service.addQuestion(question).subscribe(
      res=>{
        expect(res).toEqual(question);
      });

    let request = httpMock.expectOne(service.ADD_QUESTION_URL);
    expect(request.request.method).toBe("POST");
    request.flush(question);
  });

  it('should edit a question via http',()=>{
    let question: Question = {id:1, text:'yesno',answerCorrect:'yes',answerIncorrect:'no',category:{
        id:1,text:'testing'
      }};

    service.editQuestion(question).subscribe(
      res=>{
        expect(res).toEqual(question);
      });

    let request = httpMock.expectOne(service.EDIT_QUESTION_URL);
    expect(request.request.method).toBe("POST");
    request.flush(question);
  });

  it('should delete all questions via http',()=>{
    let questions: Question[] = [{id:1, text:'yesno',answerCorrect:'yes',answerIncorrect:'no',category:{
        id:1,text:'testing'
      }}];

    service.deleteAllQuestions().subscribe(
      res=>{
        expect(res.length).toEqual(0);
        expect(res).toEqual(questions);
      });

    let request = httpMock.expectOne(service.DELETE_ALL_QUESTIONS_URL);
    expect(request.request.method).toBe("DELETE");
    request.flush(null);
  });

  it('should get all scoreboardentries via http',()=>{
    let entries: ScoreboardEntry[] = [{id:1, playerName:'yesno',date:'12.12.',roundsPlayed:2, score:1}
    ];

    service.getAllScoreboardEntries().subscribe(
      res=>{
        expect(res.length).toBe(1);
        expect(res).toEqual(entries);
      });

    let request = httpMock.expectOne(service.SCOREBOARD_URL);
    expect(request.request.method).toBe("GET");
    request.flush(entries);
  });

  it('should delete a scoreboardentry via http',()=>{
    let entry: ScoreboardEntry = {id:1, playerName:'yesno',date:'12.12.',roundsPlayed:2, score:1};

    service.deleteScoreboardEntry(entry).subscribe(
      res=>{
        expect(res).toEqual(entry);
      });

    let request = httpMock.expectOne(service.DELETE_SCOREBOARD_ENTRY_URL);
    expect(request.request.method).toBe("POST");
    request.flush(entry);
  });
});
