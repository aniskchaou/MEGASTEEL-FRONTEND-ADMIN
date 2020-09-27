import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoirFamilleComponent } from './voir-famille.component';

describe('VoirFamilleComponent', () => {
  let component: VoirFamilleComponent;
  let fixture: ComponentFixture<VoirFamilleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoirFamilleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoirFamilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
