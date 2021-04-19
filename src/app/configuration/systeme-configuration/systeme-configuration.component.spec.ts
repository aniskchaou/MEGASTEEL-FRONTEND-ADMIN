import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemeConfigurationComponent } from './systeme-configuration.component';

describe('SystemeConfigurationComponent', () => {
  let component: SystemeConfigurationComponent;
  let fixture: ComponentFixture<SystemeConfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemeConfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemeConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
