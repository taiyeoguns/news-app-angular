import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsitemComponent } from './newsitem.component';

describe('NewsitemComponent', () => {
  let component: NewsitemComponent;
  let fixture: ComponentFixture<NewsitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
