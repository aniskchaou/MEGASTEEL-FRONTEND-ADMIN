import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterBonReservationComponent } from './ajouter-bon-reservation.component';

describe('AjouterBonReservationComponent', () => {
  let component: AjouterBonReservationComponent;
  let fixture: ComponentFixture<AjouterBonReservationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterBonReservationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterBonReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
