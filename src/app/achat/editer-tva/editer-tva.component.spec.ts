import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditerTvaComponent } from './editer-tva.component';

describe('EditerTvaComponent', () => {
  let component: EditerTvaComponent;
  let fixture: ComponentFixture<EditerTvaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditerTvaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditerTvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
