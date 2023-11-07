import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmissionsChartComponent } from './emissions-chart.component';

describe('EmissionsChartComponent', () => {
  let component: EmissionsChartComponent;
  let fixture: ComponentFixture<EmissionsChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmissionsChartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EmissionsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
