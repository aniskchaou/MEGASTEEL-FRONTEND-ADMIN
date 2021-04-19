import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterBonEntreeAchatComponent } from './ajouter-bon-entree-achat.component';

describe('AjouterBonEntreeAchatComponent', () => {
  let component: AjouterBonEntreeAchatComponent;
  let fixture: ComponentFixture<AjouterBonEntreeAchatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterBonEntreeAchatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterBonEntreeAchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
