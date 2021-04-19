import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditerBonEntreeAchatComponent } from './editer-bon-entree-achat.component';

describe('EditerBonEntreeAchatComponent', () => {
  let component: EditerBonEntreeAchatComponent;
  let fixture: ComponentFixture<EditerBonEntreeAchatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditerBonEntreeAchatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditerBonEntreeAchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
