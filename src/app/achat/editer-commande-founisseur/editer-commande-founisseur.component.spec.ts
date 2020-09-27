import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditerCommandeFounisseurComponent } from './editer-commande-founisseur.component';

describe('EditerCommandeFounisseurComponent', () => {
  let component: EditerCommandeFounisseurComponent;
  let fixture: ComponentFixture<EditerCommandeFounisseurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditerCommandeFounisseurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditerCommandeFounisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
