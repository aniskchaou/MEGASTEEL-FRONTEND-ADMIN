import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterLicenciementComponent } from './ajouter-licenciement.component';

describe('AjouterLicenciementComponent', () => {
  let component: AjouterLicenciementComponent;
  let fixture: ComponentFixture<AjouterLicenciementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterLicenciementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterLicenciementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
