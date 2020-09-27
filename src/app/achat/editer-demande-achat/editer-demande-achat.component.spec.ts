import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditerDemandeAchatComponent } from './editer-demande-achat.component';

describe('EditerDemandeAchatComponent', () => {
  let component: EditerDemandeAchatComponent;
  let fixture: ComponentFixture<EditerDemandeAchatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditerDemandeAchatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditerDemandeAchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
