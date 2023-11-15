import { inject, Injectable } from '@angular/core';
import { VesselsPageRestService } from '../../pages/vessels-page/services/vessels-page-rest.service';
import { Observable } from 'rxjs';
import { VesselsRowData } from '../../pages/vessels-page/vessels-page.connector';
@Injectable({
  providedIn: 'root',
})
export class AppStateService {
  private restService: VesselsPageRestService = inject(VesselsPageRestService);
  readonly rowData$: Observable<VesselsRowData[]> = this.restService.getRowData();
}
