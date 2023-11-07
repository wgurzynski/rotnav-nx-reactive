import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VesselsRowData } from '../vessels-page.connector';

@Injectable({
  providedIn: 'root',
})
export class VesselsPageRestService {
  constructor(private httpClient: HttpClient) {}

  getRowData(): Observable<VesselsRowData[]> {
    return this.httpClient.get<VesselsRowData[]>(
      'https://frontendteamfiles.blob.core.windows.net/exercises/vessels.json'
    );
  }
}
