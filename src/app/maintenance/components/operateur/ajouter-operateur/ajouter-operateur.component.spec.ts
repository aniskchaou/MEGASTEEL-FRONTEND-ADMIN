import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterOperateurComponent } from './ajouter-operateur.component';

describe('AjouterOperateurComponent', () => {
  let component: AjouterOperateurComponent;
  let fixture: ComponentFixture<AjouterOperateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterOperateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterOperateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
