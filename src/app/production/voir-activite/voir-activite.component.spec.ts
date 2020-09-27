import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoirActiviteComponent } from './voir-activite.component';

describe('VoirActiviteComponent', () => {
  let component: VoirActiviteComponent;
  let fixture: ComponentFixture<VoirActiviteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoirActiviteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoirActiviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
