import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BonEntreeFabricationComponent } from './bon-entree-fabrication.component';

describe('BonEntreeFabricationComponent', () => {
  let component: BonEntreeFabricationComponent;
  let fixture: ComponentFixture<BonEntreeFabricationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BonEntreeFabricationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BonEntreeFabricationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
