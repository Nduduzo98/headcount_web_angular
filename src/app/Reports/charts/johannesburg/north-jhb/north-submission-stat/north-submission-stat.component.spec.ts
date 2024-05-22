import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NorthSubmissionStatComponent } from './north-submission-stat.component';

describe('NorthSubmissionStatComponent', () => {
  let component: NorthSubmissionStatComponent;
  let fixture: ComponentFixture<NorthSubmissionStatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NorthSubmissionStatComponent]
    });
    fixture = TestBed.createComponent(NorthSubmissionStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
