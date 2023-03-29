import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PlotlyComponent } from 'angular-plotly.js';
import { Config, PieData } from 'plotly.js';
import { HoldersSolicited } from './holders-solicited.model';
import { PieLayout } from './plotly-extended.interface';
import { SolicitationStatus } from './solicitation-status.model';

export const solicitationDocumentJSON: any[] = [
  { name: 'lets_add_a_really_long_doc_name_to_test_here', signed: 10, solicited: 20, type: 'Required' },
  { name: 'test10', signed: 0, declinednotprovided: 0, solicited: 110, type: 'Informational' },
  { name: 'test6', signed: 0, declinednotprovided: 5, solicited: 72, type: 'Optional' },
  { name: 'test2', signed: 0, declinednotprovided: 0, solicited: 20, type: 'Required' },
  { name: 'test8', signed: 0, declinednotprovided: 10, solicited: 104, type: 'Optional' },
  { name: 'test3', signed: 30, declinednotprovided: 0, solicited: 35, type: 'Required' },
  { name: 'test9', signed: 0, declinednotprovided: 0, solicited: 182, type: 'Informational' },
  { name: 'test4', signed: 0, declinednotprovided: 0, solicited: 48, type: 'Required' },
  { name: 'test5', signed: 10, declinednotprovided: 0, solicited: 90, type: 'Required' },
  { name: 'test7', signed: 0, declinednotprovided: 6, solicited: 99, type: 'Optional' },
  { name: 'test11', signed: 0, declinednotprovided: 9, solicited: 88, type: 'Optional' },
  { name: 'test12', signed: 0, declinednotprovided: 15, solicited: 77, type: 'Optional' },
];

export const expectedJSONResponse = {
  holders: 100,
  solicited: 75
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public solicitationStatus!: SolicitationStatus;
  public holderChart: Partial<PieData>[] = [];
  public holdersSolicited!: HoldersSolicited;
  public holderChartLayout!: PieLayout;
  public chartConfig!: Partial<Config>;
  @ViewChild('plot',{read: PlotlyComponent}) public plot?: PlotlyComponent;

  constructor() {

  }
  ngOnInit() {
    this.solicitationStatus = new SolicitationStatus(solicitationDocumentJSON);
    this.holdersSolicited = new HoldersSolicited(expectedJSONResponse);
    this.buildChart();
  }

  private buildChart(): void {
    const sharedChart: Partial<PieData> = {
      type: 'pie',
      hole: 0.65,
      sort: false,
      direction: 'clockwise',
      textposition: 'outside',
      hoverinfo: 'none',
      texttemplate: '%{value} (%{percent:.1%})',
      domain: { x: [0.25, 0.85], y: [0.05, 1 - this.solicitationStatus.isLT15Percent() * 0.04] },
    };

    const holderChart: Partial<PieData> = {
      ...sharedChart,
      values: [this.holdersSolicited.solicited, this.holdersSolicited.notSolicited],
      labels: this.holdersSolicited.labels,
      title: {
        text: `<b>Holders:<br>(${this.holdersSolicited.holders} Total)</b>`,
      },
    };

    const sharedChartLayout: PieLayout = {
      legend: {
        font: { family: 'proxima-nova', color: '#121212', size: 14 },
        itemsizing: 'constant',
        bgcolor: 'rgba(255, 255, 255, 0)',
        itemclick: false,
        itemdoubleclick: 'toggle',
      },
      margin: { l: 0, r: 0, t: 16, b: 16 },
      autosize: true,
      font: { family: 'proxima-nova', color: '#121212', size: 14 },
    };

    const holderChartLayout: PieLayout = {
      ...sharedChartLayout,
      colorway: ['#ffc600', '#8d8d8d'],
      hiddenlabels: this.holdersSolicited.hiddenLabels,
    };


    this.holderChart.push(holderChart);
    this.holderChartLayout = { ...holderChartLayout };
    this.chartConfig = { displayModeBar: false };
  }

  onClick(a: unknown, b: unknown) {
    console.log('onClick', a, b);
  }

  legendClick(a: unknown, b: unknown) {
    console.log('legendClick', a, b);
  }
}
