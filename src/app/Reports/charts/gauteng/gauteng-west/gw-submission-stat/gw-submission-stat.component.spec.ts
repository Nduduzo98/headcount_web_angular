import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GwSubmissionStatComponent } from './gw-submission-stat.component';

describe('GwSubmissionStatComponent', () => {
  let component: GwSubmissionStatComponent;
  let fixture: ComponentFixture<GwSubmissionStatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GwSubmissionStatComponent]
    });
    fixture = TestBed.createComponent(GwSubmissionStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
