import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WestSubmissionStatComponent } from './west-submission-stat.component';

describe('WestSubmissionStatComponent', () => {
  let component: WestSubmissionStatComponent;
  let fixture: ComponentFixture<WestSubmissionStatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WestSubmissionStatComponent]
    });
    fixture = TestBed.createComponent(WestSubmissionStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
