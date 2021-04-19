import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditerPieceComponent } from './editer-piece.component';

describe('EditerPieceComponent', () => {
  let component: EditerPieceComponent;
  let fixture: ComponentFixture<EditerPieceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditerPieceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditerPieceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
