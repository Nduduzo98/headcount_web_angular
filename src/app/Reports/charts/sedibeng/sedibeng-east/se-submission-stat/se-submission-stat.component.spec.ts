import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeSubmissionStatComponent } from './se-submission-stat.component';

describe('SeSubmissionStatComponent', () => {
  let component: SeSubmissionStatComponent;
  let fixture: ComponentFixture<SeSubmissionStatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeSubmissionStatComponent]
    });
    fixture = TestBed.createComponent(SeSubmissionStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
