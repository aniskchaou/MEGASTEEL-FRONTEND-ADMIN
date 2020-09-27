import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditerBonEntreeFabricationComponent } from './editer-bon-entree-fabrication.component';

describe('EditerBonEntreeFabricationComponent', () => {
  let component: EditerBonEntreeFabricationComponent;
  let fixture: ComponentFixture<EditerBonEntreeFabricationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditerBonEntreeFabricationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditerBonEntreeFabricationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
