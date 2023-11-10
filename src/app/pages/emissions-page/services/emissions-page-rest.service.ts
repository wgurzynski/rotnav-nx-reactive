import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmissionData } from '../emissions-page.connector';

@Injectable({
  providedIn: 'root',
})
export class EmissionsPageRestService {
  private httpClient: HttpClient = inject(HttpClient);

  getChartData(): Observable<EmissionData[]> {
    return this.httpClient.get<EmissionData[]>('https://frontendteamfiles.blob.core.windows.net/exercises/emissions.json');
  }
}
