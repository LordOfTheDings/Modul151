import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {AuthenticationService} from "./shared/service/authentication.service";
import {DebugElement} from "@angular/core";
import {ApiService} from "./shared/service/api.service";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {HttpClient, HttpHandler} from "@angular/common/http";

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      providers:[
        AppComponent,ApiService,HttpClient,AuthenticationService,HttpHandler
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  beforeEach(()=>{
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;

    fixture.detectChanges();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'gluecksrad-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Glücksrad');
  });

  /*it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('gluecksrad-app app is running!');
  });*/
});
