import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsitemcontainerComponent } from './newsitemcontainer.component';

describe('NewsitemcontainerComponent', () => {
  let component: NewsitemcontainerComponent;
  let fixture: ComponentFixture<NewsitemcontainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsitemcontainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsitemcontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
