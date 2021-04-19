import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailConfigurationComponent } from './email-configuration.component';

describe('EmailConfigurationComponent', () => {
  let component: EmailConfigurationComponent;
  let fixture: ComponentFixture<EmailConfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailConfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
