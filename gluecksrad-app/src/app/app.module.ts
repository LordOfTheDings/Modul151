import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule,HTTP_INTERCEPTORS} from "@angular/common/http";
import {GameComponent } from './game/game.component';
import { PlayComponent } from './game/play/play.component';
import { QuestionsComponent } from './admin/questions/questions.component';
import { ScoreboardComponent } from './game/scoreboard/scoreboard.component';
import {BasicAuthInterceptor} from "./shared/interceptor/basic-auth.interceptor";
import {ErrorInterceptor} from "./shared/interceptor/error.interceptor";
import { EditquestionComponent } from './admin/questions/editquestion/editquestion.component';
import { CategoriesComponent } from './admin/categories/categories.component';
import { EditcategoryComponent } from './admin/categories/editcategory/editcategory.component';
import { SentencesComponent } from './admin/sentences/sentences.component';
import { EditsentenceComponent } from './admin/sentences/editsentence/editsentence.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    GameComponent,
    PlayComponent,
    QuestionsComponent,
    ScoreboardComponent,
    EditquestionComponent,
    CategoriesComponent,
    EditcategoryComponent,
    SentencesComponent,
    EditsentenceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '*',
        component: HomeComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'admin/questions',
        component: QuestionsComponent
      },
      {
        path: 'admin/questions/edit',
        component: EditquestionComponent
      },
      {
        path: 'admin/categories',
        component: CategoriesComponent
      },
      {
        path: 'admin/categories/edit',
        component: EditcategoryComponent
      },
      {
        path: 'admin/sentences',
        component: SentencesComponent
      },
      {
        path: 'admin/sentences/edit',
        component: EditsentenceComponent
      },
      {
        path: 'game/scoreboard',
        component: ScoreboardComponent
      },
      {
        path: 'game/play',
        component: PlayComponent
      },
      {
        path: 'game',
        component: GameComponent
      },
    ]),
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },],
  bootstrap: [AppComponent,HomeComponent,LoginComponent,GameComponent,QuestionsComponent,EditsentenceComponent,EditquestionComponent,
  EditcategoryComponent,ScoreboardComponent,CategoriesComponent,SentencesComponent]
})
export class AppModule { }
