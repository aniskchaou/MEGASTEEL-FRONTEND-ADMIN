import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterTvaComponent } from './ajouter-tva.component';

describe('AjouterTvaComponent', () => {
  let component: AjouterTvaComponent;
  let fixture: ComponentFixture<AjouterTvaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterTvaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterTvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
