import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditsentenceComponent } from './editsentence.component';

describe('EditsentenceComponent', () => {
  let component: EditsentenceComponent;
  let fixture: ComponentFixture<EditsentenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditsentenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditsentenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
