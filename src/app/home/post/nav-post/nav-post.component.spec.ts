import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavPostComponent } from './nav-post.component';

describe('NavPostComponent', () => {
  let component: NavPostComponent;
  let fixture: ComponentFixture<NavPostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavPostComponent]
    });
    fixture = TestBed.createComponent(NavPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
