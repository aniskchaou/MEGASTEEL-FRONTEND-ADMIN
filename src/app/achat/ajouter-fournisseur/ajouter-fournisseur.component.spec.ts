import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterFournisseurComponent } from './ajouter-fournisseur.component';

describe('AjouterFournisseurComponent', () => {
  let component: AjouterFournisseurComponent;
  let fixture: ComponentFixture<AjouterFournisseurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterFournisseurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterFournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
