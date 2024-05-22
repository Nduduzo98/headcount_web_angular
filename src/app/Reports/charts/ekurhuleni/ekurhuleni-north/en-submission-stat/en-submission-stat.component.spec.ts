import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnSubmissionStatComponent } from './en-submission-stat.component';

describe('EnSubmissionStatComponent', () => {
  let component: EnSubmissionStatComponent;
  let fixture: ComponentFixture<EnSubmissionStatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnSubmissionStatComponent]
    });
    fixture = TestBed.createComponent(EnSubmissionStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
