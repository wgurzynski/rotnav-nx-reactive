import { inject, Injectable } from '@angular/core';
import { combineLatest, map, Observable, Subject, tap } from 'rxjs';
import { EmissionsPageRestService } from './services/emissions-page-rest.service';
import { EmissionsDropdownOption, EmissionChartStructure, EmissionData } from '@shared/models/emissions.model';
import { getChartDefinition } from '@shared/utils/emissions.helper';
import { AppStateService } from '@shared/services/app.state.service';
import { VesselsRowData } from '../vessels-page/vessels-page.connector';

@Injectable({ providedIn: 'any' })
export class EmissionsPageConnector {
  private readonly appStateService: AppStateService = inject(AppStateService);
  private readonly emissionsPageRestService: EmissionsPageRestService = inject(EmissionsPageRestService);
  private readonly _selectedDropdownOptionSub$: Subject<EmissionsDropdownOption> = new Subject<EmissionsDropdownOption>();
  private readonly bulkChartsData: Observable<EmissionData[]> = this.emissionsPageRestService
    .getChartData()
    .pipe(tap((chartData: EmissionData[]) => chartData[0] && this.changeActiveEmissionSet({ id: chartData[0].id })));
  readonly selectedDropdownOption$: Observable<EmissionsDropdownOption> = this._selectedDropdownOptionSub$.asObservable();
  readonly dropdownOptions$: Observable<EmissionsDropdownOption[]> = combineLatest([this.appStateService.rowData$, this.bulkChartsData]).pipe(
    map(([rowData, chartsData]: [rowData: VesselsRowData[], chartsData: EmissionData[]]) =>
      chartsData.map((emissionData: EmissionData) => {
        const correspondingDataInRowData: VesselsRowData | undefined = rowData.find((row: VesselsRowData) => row.id === emissionData.id);

        return { id: emissionData.id, label: correspondingDataInRowData ? correspondingDataInRowData.name : null };
      })
    )
  );

  readonly activeChartData$: Observable<EmissionChartStructure> = combineLatest([
    this.bulkChartsData,
    this.selectedDropdownOption$,
    this.dropdownOptions$,
  ]).pipe(
    map(
      ([chartsData, activeEmissionSet, dropdownOptions]: [
        chartsData: EmissionData[],
        activeEmissionSet: EmissionsDropdownOption,
        dropdownOptions: EmissionsDropdownOption[]
      ]) => {
        const activeChartDataIndex: number = chartsData.findIndex((chart: EmissionData) => chart.id === activeEmissionSet.id);
        return getChartDefinition(chartsData[activeChartDataIndex], dropdownOptions[activeChartDataIndex].label || '');
      }
    )
  );

  changeActiveEmissionSet(option: EmissionsDropdownOption): void {
    this._selectedDropdownOptionSub$.next(option);
  }
}
