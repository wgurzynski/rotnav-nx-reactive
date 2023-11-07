import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { EmissionData, EmissionsPageConnector } from './emissions-page.connector';
import { EmissionsChartComponent } from './components/emissions-chart/emissions-chart.component';
import { DropdownOption, EmissionsDropdownComponent } from './components/emissions-dropdown/emissions-dropdown.component';

@Component({
  selector: 'app-emissions-page',
  standalone: true,
  imports: [CommonModule, EmissionsChartComponent, EmissionsDropdownComponent],
  templateUrl: './emissions-page.component.html',
  styleUrls: ['./emissions-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmissionsPageComponent {
  readonly chartData$: Observable<EmissionData[]> = this.emissionsPageConnector.chartsData$;

  //TODO it could be one stream with {id: number, active: boolean}
  readonly dropdownOptions$: Observable<DropdownOption[]> = this.emissionsPageConnector.dropdownOptions$;
  readonly activeEmissionSet$: Observable<DropdownOption> = this.emissionsPageConnector.activeEmissionSet$;

  constructor(private emissionsPageConnector: EmissionsPageConnector) {}

  onChangeSelectedOption(option: DropdownOption): void {
    this.emissionsPageConnector.changeActiveEmissionSet(option);
  }
}
