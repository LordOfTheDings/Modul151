import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-char-input-dialog',
  templateUrl: './consonant-input-dialog.component.html',
})
export class ConsonantInputDialog implements OnInit {

  consonantForm:FormGroup;
  amountAtStake = 0;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
              private dialogRef: MatDialogRef<ConsonantInputDialog>,
              @Inject(MAT_DIALOG_DATA) amount) {
    this.amountAtStake=amount;
  }

  ngOnInit(): void {
    let validators = [Validators.required,Validators.maxLength(1),
      Validators.pattern('^[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]{0,}$')]
    this.consonantForm = this.formBuilder.group({
      consonant: ['',validators]
    });
  }

  get f(){
    return this.consonantForm.controls;
  }

  submit(){
    this.submitted = true;
    if(this.consonantForm.invalid){
      return;
    }
    this.dialogRef.close(this.f.consonant.value);
  }
}
