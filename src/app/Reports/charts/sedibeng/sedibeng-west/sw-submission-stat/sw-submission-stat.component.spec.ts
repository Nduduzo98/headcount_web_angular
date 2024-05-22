import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwSubmissionStatComponent } from './sw-submission-stat.component';

describe('SwSubmissionStatComponent', () => {
  let component: SwSubmissionStatComponent;
  let fixture: ComponentFixture<SwSubmissionStatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SwSubmissionStatComponent]
    });
    fixture = TestBed.createComponent(SwSubmissionStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
