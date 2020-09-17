import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterCommandeComponent } from './ajouter-commande.component';

describe('AjouterCommandeComponent', () => {
  let component: AjouterCommandeComponent;
  let fixture: ComponentFixture<AjouterCommandeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterCommandeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
