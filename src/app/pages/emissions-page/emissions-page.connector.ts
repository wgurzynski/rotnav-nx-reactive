import { inject, Injectable } from '@angular/core';
import { map, Observable, Subject, tap } from 'rxjs';
import { EmissionsPageRestService } from './services/emissions-page-rest.service';
import { DropdownOption } from './components/emissions-dropdown/emissions-dropdown.component';

//TODO move to proper file
export interface EmissionData {
  id: number;
  timeSeries: EmissionTimeSeries[];
}

//TODO move to proper file
export interface EmissionTimeSeries {
  report_from_utc: Date;
  report_to_utc: Date;
  co2_emissions: number;
  sox_emissions: number;
  nox_emissions: number;
  pm_emissions: number;
  ch4_emissions: number;
}

@Injectable({ providedIn: 'any' })
export class EmissionsPageConnector {
  private readonly restService: EmissionsPageRestService = inject(EmissionsPageRestService);
  private readonly _activeEmissionSetSub$: Subject<DropdownOption> = new Subject<DropdownOption>();
  readonly chartsData$: Observable<EmissionData[]> = this.restService
    .getChartData()
    .pipe(tap((chartData: EmissionData[]) => chartData[0] && this.changeActiveEmissionSet({ id: chartData[0].id })));
  readonly activeEmissionSet$: Observable<DropdownOption> = this._activeEmissionSetSub$.asObservable();
  readonly dropdownOptions$: Observable<DropdownOption[]> = this.chartsData$.pipe(
    map((emissionDataArray: EmissionData[]) => {
      return emissionDataArray.map((emissionData: EmissionData) => {
        return { id: emissionData.id };
      });
    })
  );

  //TODO observe for data for selected chart only
  // activeChartData$: Observable<any> = this.chartsData$.pipe(switchMap((emissionsData: EmissionData[]) => {}));

  changeActiveEmissionSet(option: DropdownOption): void {
    this._activeEmissionSetSub$.next(option);
  }
}
