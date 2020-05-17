import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Question} from "../../../shared/model/question";
import {Guess} from "../../../shared/model/guess";

@Component({
  selector: 'app-question-dialog',
  templateUrl: './question-dialog.component.html',
})
export class QuestionDialogComponent implements OnInit {
  question:Question;
  amount:number= null;
  showQuestion:boolean = false;
  liquidAmount:number;
  constructor(private formBuilder: FormBuilder,
              private dialogRef: MatDialogRef<QuestionDialogComponent>,
              @Inject(MAT_DIALOG_DATA) data) {
    this.question = data.question;
    this.liquidAmount = data.liquidAmount;
  }

  ngOnInit(): void {
  }

  OnAnswerOne(){
    alert("That's correct!");
    this.dialogRef.close(new Guess(this.question.answerCorrect,this.amount));
  }

  OnAnswerTwo(){
    alert("Unfortunately incorrect!\n  Correct answer:  "+this.question.answerCorrect);
    this.dialogRef.close(new Guess(this.question.answerIncorrect,this.amount));
  }

  setAmount(amount: number) {
    const regex = RegExp('[0-9]');
    if(!regex.test(amount.toString())){
      return;
    }else if(amount >this.liquidAmount){
      alert("Sorry buddy, score too low :)...Nice try tho!");
    }else {
      this.amount = amount;
      this.showQuestion = true;
    }
  }
}
