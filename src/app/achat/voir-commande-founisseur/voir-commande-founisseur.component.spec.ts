import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoirCommandeFounisseurComponent } from './voir-commande-founisseur.component';

describe('VoirCommandeFounisseurComponent', () => {
  let component: VoirCommandeFounisseurComponent;
  let fixture: ComponentFixture<VoirCommandeFounisseurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoirCommandeFounisseurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoirCommandeFounisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
