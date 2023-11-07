import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmissionsPageComponent } from './emissions-page.component';

describe('EmissionsPageComponent', () => {
  let component: EmissionsPageComponent;
  let fixture: ComponentFixture<EmissionsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmissionsPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EmissionsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
