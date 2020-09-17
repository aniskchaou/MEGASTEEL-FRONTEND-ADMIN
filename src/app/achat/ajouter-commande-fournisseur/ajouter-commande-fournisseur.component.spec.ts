import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterCommandeFournisseurComponent } from './ajouter-commande-fournisseur.component';

describe('AjouterCommandeFournisseurComponent', () => {
  let component: AjouterCommandeFournisseurComponent;
  let fixture: ComponentFixture<AjouterCommandeFournisseurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterCommandeFournisseurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterCommandeFournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
