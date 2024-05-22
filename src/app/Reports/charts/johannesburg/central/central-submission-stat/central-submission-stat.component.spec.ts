import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentralSubmissionStatComponent } from './central-submission-stat.component';

describe('CentralSubmissionStatComponent', () => {
  let component: CentralSubmissionStatComponent;
  let fixture: ComponentFixture<CentralSubmissionStatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CentralSubmissionStatComponent]
    });
    fixture = TestBed.createComponent(CentralSubmissionStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
