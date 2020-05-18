import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCategoryComponent } from './edit-category.component';
import {CategoryService} from "../../../shared/service/category.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthGuard} from "../../../shared/guard/auth.guard";
import {FormBuilder} from "@angular/forms";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";

describe('EditcategoryComponent', () => {
  let component: EditCategoryComponent;
  let fixture: ComponentFixture<EditCategoryComponent>;

  beforeEach(async(() => {
    const fakeActivatedRoute = {
      snapshot: { data: {} }
    };
    TestBed.configureTestingModule({
      declarations: [ EditCategoryComponent ],
      providers:[
        CategoryService,
        AuthGuard,
        fakeActivatedRoute,
        FormBuilder
      ],
      imports:[
        HttpClientTestingModule,
        RouterTestingModule,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
