import { TestBed } from '@angular/core/testing';
import { AppStateService } from '@shared/services/app.state.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AppStateService', () => {
  let service: AppStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AppStateService],
    });

    service = TestBed.inject(AppStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have a defined rowData$ observable', () => {
    expect(service.rowData$).toBeDefined();
  });
});
