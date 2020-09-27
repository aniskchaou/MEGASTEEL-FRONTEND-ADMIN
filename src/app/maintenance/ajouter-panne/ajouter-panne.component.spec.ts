import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterPanneComponent } from './ajouter-panne.component';

describe('AjouterPanneComponent', () => {
  let component: AjouterPanneComponent;
  let fixture: ComponentFixture<AjouterPanneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterPanneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterPanneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
