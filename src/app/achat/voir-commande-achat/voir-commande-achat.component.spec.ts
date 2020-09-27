import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoirCommandeAchatComponent } from './voir-commande-achat.component';

describe('VoirCommandeAchatComponent', () => {
  let component: VoirCommandeAchatComponent;
  let fixture: ComponentFixture<VoirCommandeAchatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoirCommandeAchatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoirCommandeAchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
