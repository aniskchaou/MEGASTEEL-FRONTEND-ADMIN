import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoirCommandeFournisseurComponent } from './voir-commande-fournisseur.component';

describe('VoirCommandeFournisseurComponent', () => {
  let component: VoirCommandeFournisseurComponent;
  let fixture: ComponentFixture<VoirCommandeFournisseurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoirCommandeFournisseurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoirCommandeFournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
