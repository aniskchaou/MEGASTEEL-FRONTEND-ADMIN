import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterDemandeInterventionComponent } from './ajouter-demande-intervention.component';

describe('AjouterDemandeInterventionComponent', () => {
  let component: AjouterDemandeInterventionComponent;
  let fixture: ComponentFixture<AjouterDemandeInterventionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterDemandeInterventionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterDemandeInterventionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
