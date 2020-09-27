import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditerOperateurComponent } from './editer-operateur.component';

describe('EditerOperateurComponent', () => {
  let component: EditerOperateurComponent;
  let fixture: ComponentFixture<EditerOperateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditerOperateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditerOperateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
