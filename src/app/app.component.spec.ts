import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { PlotlyViaWindowModule } from 'angular-plotly.js';
import { AppComponent } from './app.component';
import * as PlotlyJS from 'plotly.js-dist-min';
import { firstValueFrom } from 'rxjs';


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

  it('should create the app', waitForAsync(() => { // using waitForAsync() since the component and the plotly component within relies on async execution of promise.
    expect(component).toBeTruthy();
    // (Optional) Additionally check if the plotly component was actually initialized
    expect(component.plot).toBeTruthy();
    // (Optional) Additionally check if the plot figure was actually initialized
    expectAsync(firstValueFrom(component.plot!.initialized.asObservable())).toBeResolved();

  }));

});
