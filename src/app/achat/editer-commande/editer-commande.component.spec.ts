import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditerCommandeComponent } from './editer-commande.component';

describe('EditerCommandeComponent', () => {
  let component: EditerCommandeComponent;
  let fixture: ComponentFixture<EditerCommandeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditerCommandeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditerCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
