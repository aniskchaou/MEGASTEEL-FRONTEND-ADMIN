import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditerActiviteComponent } from './editer-activite.component';

describe('EditerActiviteComponent', () => {
  let component: EditerActiviteComponent;
  let fixture: ComponentFixture<EditerActiviteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditerActiviteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditerActiviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
