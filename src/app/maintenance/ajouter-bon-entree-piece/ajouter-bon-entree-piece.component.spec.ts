import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterBonEntreePieceComponent } from './ajouter-bon-entree-piece.component';

describe('AjouterBonEntreePieceComponent', () => {
  let component: AjouterBonEntreePieceComponent;
  let fixture: ComponentFixture<AjouterBonEntreePieceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterBonEntreePieceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterBonEntreePieceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
