import { TestBed } from '@angular/core/testing';
import { EmissionsPageConnector } from './emissions-page.connector';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { EmissionsDropdownOption } from '@shared/models/emissions.model';

describe('EmissionsPageConnector', () => {
  let service: EmissionsPageConnector;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [],
    }).compileComponents();

    service = TestBed.inject(EmissionsPageConnector);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('should change selected dropdown option', (done) => {
    const mockDropdownOption: EmissionsDropdownOption = { id: 1, label: 'test' };

    service.selectedDropdownOption$.subscribe((newDropdownOption: EmissionsDropdownOption) => {
      expect(newDropdownOption).toEqual(mockDropdownOption);
      done();
    });

    service.changeActiveEmissionSet(mockDropdownOption);
  });
});
