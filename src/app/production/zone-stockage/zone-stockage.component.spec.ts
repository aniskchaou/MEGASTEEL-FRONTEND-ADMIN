import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoneStockageComponent } from './zone-stockage.component';

describe('ZoneStockageComponent', () => {
  let component: ZoneStockageComponent;
  let fixture: ComponentFixture<ZoneStockageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZoneStockageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoneStockageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
