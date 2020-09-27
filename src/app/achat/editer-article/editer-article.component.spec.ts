import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditerArticleComponent } from './editer-article.component';

describe('EditerArticleComponent', () => {
  let component: EditerArticleComponent;
  let fixture: ComponentFixture<EditerArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditerArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditerArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
