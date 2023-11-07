import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';
import { VesselsRowData } from '../../vessels-page.connector';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-vessels-table',
  standalone: true,
  imports: [CommonModule, AgGridModule],
  templateUrl: './vessels-table.component.html',
  styleUrls: ['./vessels-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VesselsTableComponent {
  @Input({ required: true }) rowData!: VesselsRowData[];
  @Input({ required: true }) columnDefs!: ColDef[];

  onGridReady(params: any) {
    params.api.sizeColumnsToFit();
  }
}
