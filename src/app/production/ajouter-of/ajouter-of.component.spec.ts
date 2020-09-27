import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterOfComponent } from './ajouter-of.component';

describe('AjouterOfComponent', () => {
  let component: AjouterOfComponent;
  let fixture: ComponentFixture<AjouterOfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterOfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterOfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
