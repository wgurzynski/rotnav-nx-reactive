import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { EmissionsPageConnector } from './emissions-page.connector';
import { EmissionsChartComponent } from './components/emissions-chart/emissions-chart.component';
import { EmissionsDropdownComponent } from './components/emissions-dropdown/emissions-dropdown.component';
import { EmissionChartStructure, EmissionsDropdownOption } from '@shared/models/emissions.model';
import { PanelModule } from 'primeng/panel';

@Component({
  selector: 'app-emissions-page',
  standalone: true,
  imports: [CommonModule, EmissionsChartComponent, EmissionsDropdownComponent, PanelModule],
  templateUrl: './emissions-page.component.html',
  styleUrls: ['./emissions-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmissionsPageComponent {
  private emissionsPageConnector: EmissionsPageConnector = inject(EmissionsPageConnector);
  readonly activeChartData$: Observable<EmissionChartStructure> = this.emissionsPageConnector.activeChartData$;
  readonly dropdownOptions$: Observable<EmissionsDropdownOption[]> = this.emissionsPageConnector.dropdownOptions$;
  readonly activeEmissionSet$: Observable<EmissionsDropdownOption> = this.emissionsPageConnector.selectedDropdownOption$;

  onChangeSelectedOption(option: EmissionsDropdownOption): void {
    this.emissionsPageConnector.changeActiveEmissionSet(option);
  }
}
