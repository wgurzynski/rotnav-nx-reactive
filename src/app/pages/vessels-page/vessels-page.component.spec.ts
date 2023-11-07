import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VesselsPageComponent } from './vessels-page.component';

describe('VesselsPageComponent', () => {
  let component: VesselsPageComponent;
  let fixture: ComponentFixture<VesselsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VesselsPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VesselsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
