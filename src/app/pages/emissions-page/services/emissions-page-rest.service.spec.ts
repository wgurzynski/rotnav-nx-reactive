import { TestBed } from '@angular/core/testing';

import { EmissionsPageRestService } from './emissions-page-rest.service';

describe('EmissionsPageRestService', () => {
  let service: EmissionsPageRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmissionsPageRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
