import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {SentenceService} from "../../shared/service/sentence.service";
import {Sentence} from "../../shared/model/sentence";
import {Category} from "../../shared/model/category";
import {AuthGuard} from "../../shared/guard/auth.guard";

@Component({
  selector: 'app-sentences',
  templateUrl: './sentences.component.html',
  styleUrls: ['./sentences.component.css']
})
export class SentencesComponent implements OnInit {
sentences:Sentence[];
  constructor(private sentenceService:SentenceService,
              private router:Router,
              guard: AuthGuard,
              route: ActivatedRoute) {
    guard.canActivate(route.snapshot, router.routerState.snapshot);
  }

  ngOnInit(): void {
    this.sentenceService.getAllSentences().subscribe(
      res=>{
        this.sentences = res;
      },
      err=>{
        alert("An error has occured while trying to get sentences!");
      }
    )
  }

  addNewSentence() {
    this.sentenceService.resetSentence();
    this.router.navigateByUrl("/admin/sentences/edit");
  }

  deleteSentence(sentence: Sentence) {
    this.sentenceService.deleteSentence(sentence).subscribe(
      res=>{
        location.reload();
      },
      error => {
        alert("An error occured while trying to delete sentence!");
      }
    );
  }

  editSentence(sentence: Sentence) {
    this.sentenceService.setSentence(sentence);
    this.router.navigateByUrl("admin/sentences/edit");
  }


  deleteAll() {
    this.sentenceService.deleteAll().subscribe(
      res=>{
          location.reload();
      },
      error => {
        alert("error");
      }
    );
  }
}
