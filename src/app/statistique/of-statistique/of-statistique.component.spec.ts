import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfStatistiqueComponent } from './of-statistique.component';

describe('OfStatistiqueComponent', () => {
  let component: OfStatistiqueComponent;
  let fixture: ComponentFixture<OfStatistiqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfStatistiqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfStatistiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
