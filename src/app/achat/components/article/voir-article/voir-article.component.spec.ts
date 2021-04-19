import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoirArticleComponent } from './voir-article.component';

describe('VoirArticleComponent', () => {
  let component: VoirArticleComponent;
  let fixture: ComponentFixture<VoirArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoirArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoirArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
