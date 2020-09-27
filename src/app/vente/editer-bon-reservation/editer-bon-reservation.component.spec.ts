import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditerBonReservationComponent } from './editer-bon-reservation.component';

describe('EditerBonReservationComponent', () => {
  let component: EditerBonReservationComponent;
  let fixture: ComponentFixture<EditerBonReservationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditerBonReservationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditerBonReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
