import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditerPanneComponent } from './editer-panne.component';

describe('EditerPanneComponent', () => {
  let component: EditerPanneComponent;
  let fixture: ComponentFixture<EditerPanneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditerPanneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditerPanneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
