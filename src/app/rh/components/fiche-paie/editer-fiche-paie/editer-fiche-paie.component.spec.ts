import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditerFichePaieComponent } from './editer-fiche-paie.component';

describe('EditerFichePaieComponent', () => {
  let component: EditerFichePaieComponent;
  let fixture: ComponentFixture<EditerFichePaieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditerFichePaieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditerFichePaieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
