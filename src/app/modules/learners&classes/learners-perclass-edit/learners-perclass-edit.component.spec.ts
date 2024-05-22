import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnersPerclassEditComponent } from './learners-perclass-edit.component';

describe('LearnersPerclassEditComponent', () => {
  let component: LearnersPerclassEditComponent;
  let fixture: ComponentFixture<LearnersPerclassEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LearnersPerclassEditComponent]
    });
    fixture = TestBed.createComponent(LearnersPerclassEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
