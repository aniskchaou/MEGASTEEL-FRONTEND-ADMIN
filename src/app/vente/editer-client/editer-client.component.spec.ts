import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditerClientComponent } from './editer-client.component';

describe('EditerClientComponent', () => {
  let component: EditerClientComponent;
  let fixture: ComponentFixture<EditerClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditerClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditerClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
