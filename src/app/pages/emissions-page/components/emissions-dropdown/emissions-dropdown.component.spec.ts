import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmissionsDropdownComponent } from './emissions-dropdown.component';

describe('EmissionsDropdownComponent', () => {
  let component: EmissionsDropdownComponent;
  let fixture: ComponentFixture<EmissionsDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmissionsDropdownComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EmissionsDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
