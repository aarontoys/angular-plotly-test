import { Layout, Legend, LegendClickEvent } from 'plotly.js';

// The current type definition is listed as v1.50.15. The current version of plotly is 1.54.6
// This interface extends the type definition to include needed properties that exist in the plotly documentation.
export interface PieLayout extends Partial<Layout> {
  legend?: PieLegend;
}
interface PieLegend extends Partial<Legend> {
  itemsizing?: 'trace' | 'constant';
  itemclick?: 'toggle' | 'toogleothers' | false;
  itemdoubleclick?: 'toggle' | 'toogleothers' | false;
}

export interface LegendClickEventExt extends LegendClickEvent {
  label?: string;
}
