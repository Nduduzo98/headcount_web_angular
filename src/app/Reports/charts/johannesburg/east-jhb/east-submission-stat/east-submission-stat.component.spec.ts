import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EastSubmissionStatComponent } from './east-submission-stat.component';

describe('EastSubmissionStatComponent', () => {
  let component: EastSubmissionStatComponent;
  let fixture: ComponentFixture<EastSubmissionStatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EastSubmissionStatComponent]
    });
    fixture = TestBed.createComponent(EastSubmissionStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
