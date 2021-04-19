import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterFichePaieComponent } from './ajouter-fiche-paie.component';

describe('AjouterFichePaieComponent', () => {
  let component: AjouterFichePaieComponent;
  let fixture: ComponentFixture<AjouterFichePaieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterFichePaieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterFichePaieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
