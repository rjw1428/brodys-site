import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSideComponent } from './page-side.component';

describe('PageSideComponent', () => {
  let component: PageSideComponent;
  let fixture: ComponentFixture<PageSideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageSideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
