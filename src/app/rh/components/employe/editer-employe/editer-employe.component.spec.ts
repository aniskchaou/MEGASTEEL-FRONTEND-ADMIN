import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditerEmployeComponent } from './editer-employe.component';

describe('EditerEmployeComponent', () => {
  let component: EditerEmployeComponent;
  let fixture: ComponentFixture<EditerEmployeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditerEmployeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditerEmployeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
