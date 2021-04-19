import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditerCongeComponent } from './editer-conge.component';

describe('EditerCongeComponent', () => {
  let component: EditerCongeComponent;
  let fixture: ComponentFixture<EditerCongeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditerCongeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditerCongeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
