import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterFamilleComponent } from './ajouter-famille.component';

describe('AjouterFamilleComponent', () => {
  let component: AjouterFamilleComponent;
  let fixture: ComponentFixture<AjouterFamilleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterFamilleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterFamilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
