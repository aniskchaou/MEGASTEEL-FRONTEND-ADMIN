import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterDemandeAchatComponent } from './ajouter-demande-achat.component';

describe('AjouterDemandeAchatComponent', () => {
  let component: AjouterDemandeAchatComponent;
  let fixture: ComponentFixture<AjouterDemandeAchatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterDemandeAchatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterDemandeAchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
