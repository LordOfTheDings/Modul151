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
import { EditCategoryComponent } from './admin/categories/editcategory/edit-category.component';
import { SentencesComponent } from './admin/sentences/sentences.component';
import { EditsentenceComponent } from './admin/sentences/editsentence/editsentence.component';
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialog, MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {MatSliderModule} from "@angular/material/slider";
import { ConsonantInputDialog } from './game/play/dialog/consonant-input-dialog.component';
import { QuestionDialogComponent} from "./game/play/dialog/question-dialog.component";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { VocalInputDialogComponent } from './game/play/dialog/vocal-input-dialog.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

registerLocaleData(localeFr,'de');
const material = [
  MatDialogModule,
];
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
    EditCategoryComponent,
    SentencesComponent,
    EditsentenceComponent,
    ConsonantInputDialog,
    VocalInputDialogComponent,
    QuestionDialogComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatDialogModule,
    MatSliderModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '',
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
        component: EditCategoryComponent
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
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}],

  bootstrap: [AppComponent,HomeComponent,LoginComponent,GameComponent,QuestionsComponent,EditsentenceComponent,EditquestionComponent,
  EditCategoryComponent,ScoreboardComponent,CategoriesComponent,SentencesComponent,ConsonantInputDialog,QuestionDialogComponent],
  entryComponents: [ConsonantInputDialog,QuestionDialogComponent]
})
export class AppModule { }
