import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BonEntreePieceComponent } from './bon-entree-piece.component';

describe('BonEntreePieceComponent', () => {
  let component: BonEntreePieceComponent;
  let fixture: ComponentFixture<BonEntreePieceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BonEntreePieceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BonEntreePieceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
