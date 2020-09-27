import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterPieceComponent } from './ajouter-piece.component';

describe('AjouterPieceComponent', () => {
  let component: AjouterPieceComponent;
  let fixture: ComponentFixture<AjouterPieceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterPieceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterPieceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
