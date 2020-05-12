import {Component, OnInit } from '@angular/core';
import {User} from "src/app/shared/model/user";
import {ApiService} from "../../shared/service/api.service";
import {Router} from "@angular/router";
import {ScoreboardEntry} from "../../shared/model/scoreboardEntry";
import {AuthenticationService} from "../../shared/service/authentication.service";

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent implements OnInit {
 entries: ScoreboardEntry[];
  constructor(private apiService:ApiService,
              public authenticationService: AuthenticationService)
  { }

  ngOnInit(): void {
    this.apiService.getAllScoreboardEntries().subscribe(
      res=>{
        this.entries = res;
        this.entries.sort((a, b) => b.score - a.score);
      },
      error => {
        alert("An error occurred while trying to get all scoreboard-entries")
      }
    )
  }

  deleteEntry(entry: ScoreboardEntry) {
    this.apiService.deleteScoreboardEntry(entry).subscribe(
      res=>{
        location.reload();
      },
      err=>{
        alert("An error occurred while trying to delete entry!");
      }
    );
  }
}
