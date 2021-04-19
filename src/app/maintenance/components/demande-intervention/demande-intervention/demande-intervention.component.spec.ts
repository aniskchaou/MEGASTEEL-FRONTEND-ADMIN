import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeInterventionComponent } from './demande-intervention.component';

describe('DemandeInterventionComponent', () => {
  let component: DemandeInterventionComponent;
  let fixture: ComponentFixture<DemandeInterventionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandeInterventionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeInterventionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
