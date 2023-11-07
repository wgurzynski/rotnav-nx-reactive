import { Injectable } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { Observable, of } from 'rxjs';
import { VesselsPageRestService } from './services/vessels-page-rest.service';
import { BooleanRenderer, dateFormatter } from './utils/cellRenderers.utils';

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
  readonly columnDefs: ColDef[] = [
    { field: 'id' },
    { field: 'name' },
    { field: 'mmsi' },
    { field: 'imo' },
    { field: 'companyId' },
    { field: 'companyName' },
    { field: 'startDate', valueFormatter: dateFormatter },
    { field: 'active', cellRenderer: BooleanRenderer },
    { field: 'vesselType' },
  ];

  readonly rowData$: Observable<VesselsRowData[]> =
    this.restService.getRowData();

  constructor(private restService: VesselsPageRestService) {}
}
