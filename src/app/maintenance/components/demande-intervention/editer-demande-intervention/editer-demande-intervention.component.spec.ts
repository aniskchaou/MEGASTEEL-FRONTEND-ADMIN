import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditerDemandeInterventionComponent } from './editer-demande-intervention.component';

describe('EditerDemandeInterventionComponent', () => {
  let component: EditerDemandeInterventionComponent;
  let fixture: ComponentFixture<EditerDemandeInterventionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditerDemandeInterventionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditerDemandeInterventionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
