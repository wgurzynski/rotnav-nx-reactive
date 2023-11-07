import { TestBed } from '@angular/core/testing';

import { VesselsPageRestService } from './vessels-page-rest.service';

describe('VesselsPageRestService', () => {
  let service: VesselsPageRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VesselsPageRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
