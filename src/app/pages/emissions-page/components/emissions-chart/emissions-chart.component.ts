import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Highcharts from 'highcharts';
import {
  EmissionData,
  EmissionTimeSeries,
} from '../../emissions-page.connector';

@Component({
  selector: 'app-emissions-chart',
  standalone: true,
  imports: [CommonModule],
  template: `<div id="emissions-chart"></div>`,
  styleUrls: ['./emissions-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmissionsChartComponent implements AfterViewInit {
  @Input({ required: true }) chartData!: EmissionData;
  @Input() chartDefinition: Record<string, any> = {};
  public ngAfterViewInit(): void {
    console.log(this.chartData);
    this.createChartLine(this.chartData);
  }

  private createChartLine(data: any): void {
    console.log(data.timeSeries[0].ch4_emissions);
    Highcharts.chart('emissions-chart', {
      colors: [
        '#f1c40f',
        '#2ecc71',
        '#9b59b6',
        '#e74c3c',
        '#34495e',
        '#3498db',
        '#1abc9c',
        '#f39c12',
        '#d35400',
      ],
      chart: {
        backgroundColor: '#051f46',
        style: {
          color: '#A2A39C',
          border: '#fff',
        },
        zoomType: 'x',
        borderColor: '#2ecc71',
        borderWidth: 2,
        borderRadius: 5,
      },
      title: {
        text: 'MS Alpha Emission',
        style: {
          color: '#A2A39C',
        },
      },
      credits: {
        enabled: false,
      },
      legend: {
        enabled: true,
        verticalAlign: 'bottom',
        itemStyle: {
          fontWeight: 'normal',
          color: '#A2A39C',
        },
      },
      yAxis: {
        title: {
          text: 'Values',
        },
        gridLineDashStyle: 'Dot',
        gridLineWidth: 1,
        gridLineColor: '#A2A39C',
        lineColor: '#A2A39C',
        minorGridLineColor: '#A2A39C',
        tickColor: '#A2A39C',
        tickWidth: 1,
      },
      xAxis: {
        categories: [
          ...data.timeSeries.map(({ report_from_utc }: EmissionTimeSeries) =>
            new Date(report_from_utc).toLocaleDateString('en-GB', {
              timeZone: 'UTC',
              day: 'numeric',
              month: 'short',
            })
          ),
        ],
        // labels: {
        //   step: 8,
        // },
        minTickInterval: 9,
        // type: 'datetime',
        // labels: {
        //   format: '{value:%Y-%m-%d}',
        // },
        // labels: {
        //   formatter: (value: any) => {
        //     console.log(value);
        //     return value;
        //   },
        // },
        gridLineDashStyle: 'Dot',
        gridLineColor: '#A2A39C',
        lineColor: '#A2A39C',
        minorGridLineColor: '#A2A39C',
        tickColor: '#A2A39C',
        tickWidth: 1,
      },
      tooltip: {
        headerFormat: `<div>Date: {point.key}</div>`,
        pointFormat: `<div>{series.name}: {point.y}</div>`,
        shared: true,
        useHTML: true,
      },
      series: [
        {
          name: 'Methane',
          data: [
            ...data.timeSeries.map(
              ({ ch4_emissions }: EmissionTimeSeries) => ch4_emissions
            ),
          ],
        },
        {
          name: 'N0x',
          data: [
            ...data.timeSeries.map(
              ({ nox_emissions }: EmissionTimeSeries) => nox_emissions
            ),
          ],
        },
        {
          name: 'PM',
          data: [
            ...data.timeSeries.map(
              ({ pm_emissions }: EmissionTimeSeries) => pm_emissions
            ),
          ],
        },
        {
          name: 'S0x',
          data: [
            ...data.timeSeries.map(
              ({ sox_emissions }: EmissionTimeSeries) => sox_emissions
            ),
          ],
        },
        {
          name: 'CO2',
          data: [
            ...data.timeSeries.map(
              ({ co2_emissions }: EmissionTimeSeries) => co2_emissions
            ),
          ],
          visible: false,
        },
      ],
    } as any);
  }
}
