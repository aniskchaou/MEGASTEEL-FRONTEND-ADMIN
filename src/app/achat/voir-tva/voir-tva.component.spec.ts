import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoirTvaComponent } from './voir-tva.component';

describe('VoirTvaComponent', () => {
  let component: VoirTvaComponent;
  let fixture: ComponentFixture<VoirTvaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoirTvaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoirTvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
