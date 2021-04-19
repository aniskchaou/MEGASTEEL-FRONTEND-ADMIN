import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoirOfComponent } from './voir-of.component';

describe('VoirOfComponent', () => {
  let component: VoirOfComponent;
  let fixture: ComponentFixture<VoirOfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoirOfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoirOfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
