import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenancePreventiveComponent } from './maintenance-preventive.component';

describe('MaintenancePreventiveComponent', () => {
  let component: MaintenancePreventiveComponent;
  let fixture: ComponentFixture<MaintenancePreventiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintenancePreventiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenancePreventiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
