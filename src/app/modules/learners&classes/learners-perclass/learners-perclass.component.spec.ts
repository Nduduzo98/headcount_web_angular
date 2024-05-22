import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnersPerclassComponent } from './learners-perclass.component';

describe('LearnersPerclassComponent', () => {
  let component: LearnersPerclassComponent;
  let fixture: ComponentFixture<LearnersPerclassComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LearnersPerclassComponent]
    });
    fixture = TestBed.createComponent(LearnersPerclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
