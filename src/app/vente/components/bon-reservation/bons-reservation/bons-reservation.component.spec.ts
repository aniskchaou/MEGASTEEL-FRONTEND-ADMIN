import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BonsReservationComponent } from './bons-reservation.component';

describe('BonsReservationComponent', () => {
  let component: BonsReservationComponent;
  let fixture: ComponentFixture<BonsReservationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BonsReservationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BonsReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
