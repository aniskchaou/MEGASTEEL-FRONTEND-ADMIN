import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FichePaieComponent } from './fiche-paie.component';

describe('FichePaieComponent', () => {
  let component: FichePaieComponent;
  let fixture: ComponentFixture<FichePaieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FichePaieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FichePaieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
