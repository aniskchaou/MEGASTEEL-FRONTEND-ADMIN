import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditerMaintenancePreventiveComponent } from './editer-maintenance-preventive.component';

describe('EditerMaintenancePreventiveComponent', () => {
  let component: EditerMaintenancePreventiveComponent;
  let fixture: ComponentFixture<EditerMaintenancePreventiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditerMaintenancePreventiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditerMaintenancePreventiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
