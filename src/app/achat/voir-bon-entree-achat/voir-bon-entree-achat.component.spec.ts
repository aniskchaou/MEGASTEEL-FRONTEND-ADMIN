import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoirBonEntreeAchatComponent } from './voir-bon-entree-achat.component';

describe('VoirBonEntreeAchatComponent', () => {
  let component: VoirBonEntreeAchatComponent;
  let fixture: ComponentFixture<VoirBonEntreeAchatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoirBonEntreeAchatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoirBonEntreeAchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
