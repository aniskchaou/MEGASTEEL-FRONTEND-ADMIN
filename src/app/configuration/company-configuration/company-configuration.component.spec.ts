import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyConfigurationComponent } from './company-configuration.component';

describe('CompanyConfigurationComponent', () => {
  let component: CompanyConfigurationComponent;
  let fixture: ComponentFixture<CompanyConfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyConfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
