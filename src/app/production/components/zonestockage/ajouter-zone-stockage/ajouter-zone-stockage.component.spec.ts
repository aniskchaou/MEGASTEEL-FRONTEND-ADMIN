import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterZoneStockageComponent } from './ajouter-zone-stockage.component';

describe('AjouterZoneStockageComponent', () => {
  let component: AjouterZoneStockageComponent;
  let fixture: ComponentFixture<AjouterZoneStockageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterZoneStockageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterZoneStockageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
