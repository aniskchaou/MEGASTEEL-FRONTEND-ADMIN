import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LicencimentComponent } from './licenciment.component';

describe('LicencimentComponent', () => {
  let component: LicencimentComponent;
  let fixture: ComponentFixture<LicencimentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LicencimentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LicencimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
