import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BonsLivraisonComponent } from './bons-livraison.component';

describe('BonsLivraisonComponent', () => {
  let component: BonsLivraisonComponent;
  let fixture: ComponentFixture<BonsLivraisonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BonsLivraisonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BonsLivraisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
