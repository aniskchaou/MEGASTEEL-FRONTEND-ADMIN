import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterPrestataireComponent } from './ajouter-prestataire.component';

describe('AjouterPrestataireComponent', () => {
  let component: AjouterPrestataireComponent;
  let fixture: ComponentFixture<AjouterPrestataireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterPrestataireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterPrestataireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
