import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { VesselsPageConnector } from './vessels-page.connector';

describe('VesselsPageConnector', () => {
  let service: VesselsPageConnector;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [],
    }).compileComponents();

    service = TestBed.inject(VesselsPageConnector);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });
});
