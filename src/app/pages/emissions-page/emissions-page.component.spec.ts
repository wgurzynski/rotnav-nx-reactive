import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmissionsPageComponent } from './emissions-page.component';
import { EmissionsPageConnector } from './emissions-page.connector';
import { EmissionsDropdownOption } from '@shared/models/emissions.model';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Injectable } from '@angular/core';

describe('EmissionsPageComponent', () => {
  let component: EmissionsPageComponent;
  let fixture: ComponentFixture<EmissionsPageComponent>;
  let service: EmissionsPageConnector;

  @Injectable()
  class MockEmissionPageConnector {
    changeActiveEmissionSet(): void {
      jest.fn();
    }
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmissionsPageComponent, HttpClientTestingModule, BrowserAnimationsModule],
      providers: [{ provide: EmissionsPageConnector, useClass: MockEmissionPageConnector }],
    }).compileComponents();

    fixture = TestBed.createComponent(EmissionsPageComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(EmissionsPageConnector);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should trigger change selected output ', () => {
    const mockDropdownOption: EmissionsDropdownOption = { id: 1, label: 'test' };
    const connectorySpy: jest.SpyInstance = jest.spyOn(component['emissionsPageConnector'], 'changeActiveEmissionSet');

    component.onChangeSelectedOption(mockDropdownOption);
    expect(connectorySpy).toBeCalledWith(mockDropdownOption);
  });
});
