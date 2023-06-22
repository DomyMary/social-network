import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewCommentComponent } from './create-new-comment.component';

describe('CreateNewCommentComponent', () => {
  let component: CreateNewCommentComponent;
  let fixture: ComponentFixture<CreateNewCommentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateNewCommentComponent]
    });
    fixture = TestBed.createComponent(CreateNewCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
