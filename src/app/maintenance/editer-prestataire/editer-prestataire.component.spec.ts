import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditerPrestataireComponent } from './editer-prestataire.component';

describe('EditerPrestataireComponent', () => {
  let component: EditerPrestataireComponent;
  let fixture: ComponentFixture<EditerPrestataireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditerPrestataireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditerPrestataireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
