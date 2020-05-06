import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {GameComponent } from './game/game.component';
import { PlayComponent } from './play/play.component';
import { AdminComponent } from './admin/admin.component';
import { QuestionsComponent } from './questions/questions.component';
import { ScoreboardComponent } from './game/scoreboard/scoreboard.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    GameComponent,
    PlayComponent,
    AdminComponent,
    QuestionsComponent,
    ScoreboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path:'login',
        component:LoginComponent
      },
      {
        path:'home',
        component:HomeComponent
      },
      {
        path:'game',
        component: GameComponent
      },
      {
        path:'admin/questions',
        component:QuestionsComponent
      },
      {
        path:'game/scoreboard',
        component:ScoreboardComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent,HomeComponent,LoginComponent,GameComponent]
})
export class AppModule { }
