import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditerBonLivraisonComponent } from './editer-bon-livraison.component';

describe('EditerBonLivraisonComponent', () => {
  let component: EditerBonLivraisonComponent;
  let fixture: ComponentFixture<EditerBonLivraisonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditerBonLivraisonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditerBonLivraisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
