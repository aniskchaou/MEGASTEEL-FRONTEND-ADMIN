import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditerMachineComponent } from './editer-machine.component';

describe('EditerMachineComponent', () => {
  let component: EditerMachineComponent;
  let fixture: ComponentFixture<EditerMachineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditerMachineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditerMachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
