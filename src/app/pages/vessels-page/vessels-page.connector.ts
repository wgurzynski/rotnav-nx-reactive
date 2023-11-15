import { inject, Injectable } from '@angular/core';
import { CellClickedEvent, ColDef } from 'ag-grid-community';
import { Observable, of } from 'rxjs';
import { BooleanRenderer, dateFormatter } from './utils/cellRenderers.utils';
import { AppStateService } from '@shared/services/app.state.service';

export interface VesselsRowData {
  id: number;
  name: string;
  mmsi: number;
  imo: number;
  companyId: number;
  companyName: string;
  startDate: string;
  active: boolean;
  vesselType: string;
}

@Injectable({ providedIn: 'any' })
export class VesselsPageConnector {
  private appStateService: AppStateService = inject(AppStateService);
  readonly rowData$: Observable<VesselsRowData[]> = this.appStateService.rowData$;
  readonly columnDefs: ColDef[] = [
    { field: 'id', onCellClicked: (_event: CellClickedEvent) => console.log('Cell was clicked') },
    { field: 'name' },
    { field: 'mmsi' },
    { field: 'imo' },
    { field: 'companyId' },
    { field: 'companyName' },
    { field: 'startDate', valueFormatter: dateFormatter },
    { field: 'active', cellRenderer: BooleanRenderer },
    { field: 'vesselType' },
  ];
}
