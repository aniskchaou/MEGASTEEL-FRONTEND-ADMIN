import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BonEntreeAchatComponent } from './bon-entree-achat.component';

describe('BonEntreeAchatComponent', () => {
  let component: BonEntreeAchatComponent;
  let fixture: ComponentFixture<BonEntreeAchatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BonEntreeAchatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BonEntreeAchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
