import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GnSubmissionStatComponent } from './gn-submission-stat.component';

describe('GnSubmissionStatComponent', () => {
  let component: GnSubmissionStatComponent;
  let fixture: ComponentFixture<GnSubmissionStatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GnSubmissionStatComponent]
    });
    fixture = TestBed.createComponent(GnSubmissionStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
