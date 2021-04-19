import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriviligeComponent } from './privilige.component';

describe('PriviligeComponent', () => {
  let component: PriviligeComponent;
  let fixture: ComponentFixture<PriviligeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriviligeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriviligeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
