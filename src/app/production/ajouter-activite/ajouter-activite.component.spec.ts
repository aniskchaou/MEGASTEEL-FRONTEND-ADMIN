import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterActiviteComponent } from './ajouter-activite.component';

describe('AjouterActiviteComponent', () => {
  let component: AjouterActiviteComponent;
  let fixture: ComponentFixture<AjouterActiviteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterActiviteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterActiviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
