import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoirCommandeComponent } from './voir-commande.component';

describe('VoirCommandeComponent', () => {
  let component: VoirCommandeComponent;
  let fixture: ComponentFixture<VoirCommandeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoirCommandeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoirCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
