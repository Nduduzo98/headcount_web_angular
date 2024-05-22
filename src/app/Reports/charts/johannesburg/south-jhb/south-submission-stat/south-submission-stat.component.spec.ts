import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SouthSubmissionStatComponent } from './south-submission-stat.component';

describe('SouthSubmissionStatComponent', () => {
  let component: SouthSubmissionStatComponent;
  let fixture: ComponentFixture<SouthSubmissionStatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SouthSubmissionStatComponent]
    });
    fixture = TestBed.createComponent(SouthSubmissionStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
