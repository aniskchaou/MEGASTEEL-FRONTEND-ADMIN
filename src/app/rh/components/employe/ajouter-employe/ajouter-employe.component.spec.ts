import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterEmployeComponent } from './ajouter-employe.component';

describe('AjouterEmployeComponent', () => {
  let component: AjouterEmployeComponent;
  let fixture: ComponentFixture<AjouterEmployeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterEmployeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterEmployeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
