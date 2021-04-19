import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterBonLivraisonComponent } from './ajouter-bon-livraison.component';

describe('AjouterBonLivraisonComponent', () => {
  let component: AjouterBonLivraisonComponent;
  let fixture: ComponentFixture<AjouterBonLivraisonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterBonLivraisonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterBonLivraisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
