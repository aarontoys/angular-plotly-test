import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlotlyViaWindowModule } from 'angular-plotly.js';
import { AppComponent } from './app.component';
import * as PlotlyJS from 'plotly.js-dist-min';


let fixture: ComponentFixture<AppComponent>;
let component: AppComponent;
window.Plotly = PlotlyJS;


describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        PlotlyViaWindowModule
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  })

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

});
