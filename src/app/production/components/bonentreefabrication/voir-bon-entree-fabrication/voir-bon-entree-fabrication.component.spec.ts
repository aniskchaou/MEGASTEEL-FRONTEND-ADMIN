import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoirBonEntreeFabricationComponent } from './voir-bon-entree-fabrication.component';

describe('VoirBonEntreeFabricationComponent', () => {
  let component: VoirBonEntreeFabricationComponent;
  let fixture: ComponentFixture<VoirBonEntreeFabricationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoirBonEntreeFabricationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoirBonEntreeFabricationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
