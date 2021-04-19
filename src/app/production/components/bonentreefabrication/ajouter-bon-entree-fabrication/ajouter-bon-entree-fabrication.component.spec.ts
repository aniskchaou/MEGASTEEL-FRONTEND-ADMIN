import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterBonEntreeFabricationComponent } from './ajouter-bon-entree-fabrication.component';

describe('AjouterBonEntreeFabricationComponent', () => {
  let component: AjouterBonEntreeFabricationComponent;
  let fixture: ComponentFixture<AjouterBonEntreeFabricationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterBonEntreeFabricationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterBonEntreeFabricationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
