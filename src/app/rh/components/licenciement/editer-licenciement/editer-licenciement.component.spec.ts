import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditerLicenciementComponent } from './editer-licenciement.component';

describe('EditerLicenciementComponent', () => {
  let component: EditerLicenciementComponent;
  let fixture: ComponentFixture<EditerLicenciementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditerLicenciementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditerLicenciementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
