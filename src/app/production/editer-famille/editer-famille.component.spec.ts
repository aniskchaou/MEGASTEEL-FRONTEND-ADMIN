import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditerFamilleComponent } from './editer-famille.component';

describe('EditerFamilleComponent', () => {
  let component: EditerFamilleComponent;
  let fixture: ComponentFixture<EditerFamilleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditerFamilleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditerFamilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
