import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterMaintenancePreventiveComponent } from './ajouter-maintenance-preventive.component';

describe('AjouterMaintenancePreventiveComponent', () => {
  let component: AjouterMaintenancePreventiveComponent;
  let fixture: ComponentFixture<AjouterMaintenancePreventiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterMaintenancePreventiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterMaintenancePreventiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
