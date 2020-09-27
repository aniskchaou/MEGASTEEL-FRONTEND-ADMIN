import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditerFournisseurComponent } from './editer-fournisseur.component';

describe('EditerFournisseurComponent', () => {
  let component: EditerFournisseurComponent;
  let fixture: ComponentFixture<EditerFournisseurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditerFournisseurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditerFournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
