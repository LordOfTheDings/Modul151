import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-vocal-input-dialog',
  templateUrl: './vocal-input-dialog.component.html',
})
export class VocalInputDialogComponent implements OnInit {
  vocalForm:FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder,
              private dialogRef: MatDialogRef<VocalInputDialogComponent>,) {
  }

  ngOnInit(): void {
    let validators = [Validators.required,Validators.maxLength(1),Validators.pattern('^[aeiouAEIOU]{0,}$')]
    this.vocalForm = this.formBuilder.group({
      vocal: ['',validators]
    });
  }

  get f(){
    return this.vocalForm.controls;
  }

  submit(){
    this.submitted = true;
    if(this.vocalForm.invalid){
      return;
    }
    this.dialogRef.close(this.f.vocal.value);
  }

}
