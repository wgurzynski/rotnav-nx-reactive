import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColDef } from 'ag-grid-community';
import { VesselsPageConnector, VesselsRowData } from './vessels-page.connector';
import { AgGridModule } from 'ag-grid-angular';
import { Observable } from 'rxjs';
import { VesselsTableComponent } from './components/vessels-table/vessels-table.component';

@Component({
  selector: 'app-vessels-page',
  standalone: true,
  imports: [CommonModule, AgGridModule, VesselsTableComponent],
  templateUrl: './vessels-page.component.html',
  styleUrls: ['./vessels-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VesselsPageComponent {
  private vesselsPageConnector: VesselsPageConnector = inject(VesselsPageConnector);
  readonly columnDefs: ColDef[] = this.vesselsPageConnector.columnDefs;
  readonly rowData$: Observable<VesselsRowData[]> = this.vesselsPageConnector.rowData$;
}
