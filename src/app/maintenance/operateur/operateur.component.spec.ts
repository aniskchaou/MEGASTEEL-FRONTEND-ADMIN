import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperateurComponent } from './operateur.component';

describe('OperateurComponent', () => {
  let component: OperateurComponent;
  let fixture: ComponentFixture<OperateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
