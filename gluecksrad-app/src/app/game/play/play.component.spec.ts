import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayComponent } from './play.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {FormBuilder} from "@angular/forms";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {Overlay} from "@angular/cdk/overlay";
import {GameService} from "../../shared/service/game.service";

describe('PlayComponent', () => {
  let component: PlayComponent;
  let fixture: ComponentFixture<PlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayComponent ],
      imports:[
        HttpClientTestingModule,
        RouterTestingModule,
      ],
      providers:[
        FormBuilder,
        MatDialog,
        Overlay,
        GameService,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
