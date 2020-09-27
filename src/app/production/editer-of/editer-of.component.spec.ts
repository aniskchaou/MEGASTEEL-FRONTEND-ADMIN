import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditerOfComponent } from './editer-of.component';

describe('EditerOfComponent', () => {
  let component: EditerOfComponent;
  let fixture: ComponentFixture<EditerOfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditerOfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditerOfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
